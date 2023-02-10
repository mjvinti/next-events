import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

import { getEventById, getFeaturedEvents } from "@/helpers/api-util";

function EventDetailPage({ event }) {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  const { date, description, image, location, title } = event;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        address={location}
        date={date}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps({ params: { eventId } }) {
  const event = await getEventById(eventId);
  return { props: { event }, revalidate: 30 };
}

export async function getStaticPaths() {
  const featuredEvents = await getFeaturedEvents();
  const paths = featuredEvents.map((event) => ({
    params: { eventId: event.id },
  }));
  return { paths, fallback: "blocking" };
}

export default EventDetailPage;

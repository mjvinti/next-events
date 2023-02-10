import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";

import { getAllEvents, getEventById } from "@/helpers/api-util";

function EventDetailPage({ event }) {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
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
  return { props: { event } };
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();
  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));
  return { paths, fallback: false };
}

export default EventDetailPage;

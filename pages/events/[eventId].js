import { useRouter } from "next/router";

import { getEventById } from "@/dummy-data";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

function EventDetailPage() {
  const {
    query: { eventId },
  } = useRouter();

  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
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

export default EventDetailPage;

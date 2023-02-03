import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  const { push } = useRouter();

  function findEventsHandler(year, month) {
    push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;

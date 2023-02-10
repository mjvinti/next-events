import EventList from "@/components/events/event-list";

import { getFeaturedEvents } from "@/helpers/api-util";

function HomePage({ events }) {
  return <EventList items={events} />;
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return { props: { events: featuredEvents }, revalidate: 1800 };
}

export default HomePage;

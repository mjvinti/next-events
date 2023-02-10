export async function getAllEvents() {
  const response = await fetch(`${process.env.API_URL}/events.json`);
  const data = await response.json();
  return Object.entries(data).map(([id, values]) => ({
    id,
    ...values,
  }));
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

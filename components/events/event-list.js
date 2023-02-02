import EventItem from "./event-item";

function EventList({ items }) {
  return (
    <ul>
      {items.map(({ date, id, image, location, title }) => (
        <EventItem
          date={date}
          id={id}
          image={image}
          key={id}
          location={location}
          title={title}
        />
      ))}
    </ul>
  );
}

export default EventList;

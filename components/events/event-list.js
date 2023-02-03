import EventItem from "./event-item";

import classes from "./event-list.module.css";

function EventList({ items }) {
  return (
    <ul className={classes.list}>
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

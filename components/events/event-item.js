import Link from "next/link";

function EventItem({ date, id, image, location, title }) {
  const readableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const address = location.replace(", ", "\n");
  const href = `/events/${id}`;

  return (
    <li>
      <img alt={title} src={`/${image}`} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{address}</address>
          </div>
        </div>
        <div>
          <Link href={href}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

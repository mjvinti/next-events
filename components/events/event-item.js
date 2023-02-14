import Image from "next/image";

import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";

import classes from "./event-item.module.css";

function EventItem({ date, id, image, location, title }) {
  const readableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const address = location.replace(", ", "\n");
  const href = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image alt={title} height={160} src={`/${image}`} width={250} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{address}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={href}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

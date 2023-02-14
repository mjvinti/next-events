import Head from "next/head";
import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/helpers/api-util";

function FilteredEventsPage({ events, date: { year, month }, hasError }) {
  // const {
  //   query: { slug },
  // } = useRouter();

  // if (!slug) {
  //   return <p className="center">Loading...</p>;
  // }

  // const [year, month] = slug;
  // const numYear = +year,
  //   numMonth = +month;

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!events || !events.length) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <Head>
        <title>Filtered Events</title>
        <meta name="description" content={`All events for ${month}/${year}.`} />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </>
  );
}

export async function getServerSideProps({ params: { slug } }) {
  const [year, month] = slug;
  const numYear = +year,
    numMonth = +month;
  const hasError =
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12;
  const events = await getFilteredEvents({ year: numYear, month: numMonth });

  return {
    props: { events, date: { year: numYear, month: numMonth }, hasError },
  };
}

export default FilteredEventsPage;

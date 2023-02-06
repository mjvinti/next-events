import { useRouter } from "next/router";

import { getFilteredEvents } from "@/dummy-data";

function FilteredEventsPage() {
  const { query } = useRouter();

  const filteredData = query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = filteredData;
  const numYear = +year,
    numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <h1>FilteredEventsPage</h1>
    </div>
  );
}

export default FilteredEventsPage;

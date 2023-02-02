import { getFeaturedEvents } from "@/dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
}

export default HomePage;

import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? "";

if (!API_BASE_URL) {
  throw new Error(
    "API base URL is not defined. Please set the REACT_APP_API_BASE_URL environment variable."
  );
}

export default function HomeCardsComponent() {
  const [homeCards, setHomeCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeCards = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/homecards`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHomeCards(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeCards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-sky-300 py-12">
      <h2 className="text-center text-xl text-zinc-900 mb-8">
        Explore your next getaway
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {homeCards.map((item) => (
            <HomeCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

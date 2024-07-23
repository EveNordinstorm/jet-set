import HomeCards from "../data/homeCards.json";
import HomeCard from "./HomeCard.tsx";

export default function HomeCardsComponent() {
  return (
    <>
      <div className="bg-sky-300 py-12">
        <h2 className="text-center text-xl text-zinc-900 mb-8">
          Explore your next getaway
        </h2>

        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {HomeCards.map((item) => (
              <HomeCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

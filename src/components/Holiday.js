import Holidays from "../data/holidays.json";
import HolidayItem from "./HolidayItem.tsx";

export default function Holiday() {
  return (
    <>
      <div className="bg-sky-300 py-12">
        <h2 className="text-center text-2xl text-zinc-900 mb-8">
          Which adventure are you choosing?
          <br />
          Explore your next getaway now!
        </h2>

        {Holidays.map((item) => (
          <HolidayItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

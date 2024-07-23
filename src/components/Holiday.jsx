import Holidays from "../data/holidays.json";
import HolidayItem from "./HolidayItem";
import { Link } from "react-router-dom";
import { Button } from "./Button";

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

        <div className="flex justify-center mt-10">
          <div
            className="block w-[386px] h-[450px] lg:w-[772px] lg:h-[300px] rounded bg-center bg-black/60 bg-blend-overlay bg-cover p-8 drop-shadow-lg"
            style={{
              backgroundImage: `url("images/tour-group-2.jpg")`,
            }}
          >
            <h5 className="mb-4 text-3xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
              Add a Guided Tour to Your Package
            </h5>
            <p className="mb-8 text-lg text-white">
              Make your holiday one to remember with Jet Set's tour guide
              packages, available for all of our destinations. Find out more
              about the rich culture of our locations and let us help you
              discover the hidden gems they have to offer.
            </p>
            <Link to="/products">
              <Button buttonStyle="btn--blue" buttonSize="btn--medium">
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

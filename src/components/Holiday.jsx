import { useEffect, useState } from 'react';
import HolidayItem from './HolidayItem';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const ERROR_IMAGE_URL = "/images/cannot-fetch.png";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function Holiday() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/Holidays`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHolidays(data);
      } catch (error) {
        setError(error.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center my-60">
        <svg
          class="w-10 h-10 text-gray-300 animate-spin"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-gray-900"
          ></path>
        </svg>
        <p className="text-3xl text-zinc-900 ml-5">Loading...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex justify-center">
        <div>
          <p className="text-center text-3xl text-red-600 mt-14">
            Error: {error}
          </p>
          <img
            src={ERROR_IMAGE_URL}
            alt="Error occurred"
            className="w-96 h-96 object-cover my-14"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-sky-300 py-12">
        <h2 className="text-center text-2xl text-zinc-900 mb-8">
          Which adventure are you choosing?
          <br />
          Explore your next getaway now!
        </h2>

        {holidays.length > 0 ? (
                holidays.map((item) => <HolidayItem key={item.id} {...item} />)
              ) : (
                <p>No holidays found.</p>
              )}

        <div className="flex justify-center mt-10">
          <div
            className="block w-[386px] h-[550px] lg:w-[772px] lg:h-[375px] rounded bg-center bg-black/60 bg-blend-overlay bg-cover p-8 drop-shadow-lg"
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

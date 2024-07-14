import Holidays from "../data/holidays.json";
import HolidayItem from "./HolidayItem.tsx";

export default function Holiday() {
  return (
    <>
      {Holidays.map((item) => (
        <HolidayItem key={item.id} {...item} />
      ))}
    </>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "./Button";
// import HolidayItem from "./HolidayItem";
// import "./Holidays.css";

// function Holiday() {
//   return (
//     <div className="holidays-page">
//       <h1 className="intro">
//         Which adventure are you choosing?
//         <br />
//         Explore your next getaway now!
//       </h1>
//       <div className="holidays-container">
//         <div className="holidays-wrapper">
//           <ul className="holidays-items">
//             <HolidayItem
//               id="1"
//               src="images/new-york.jpg"
//               label="City Break"
//               title="New York"
//               text="Discover the rich culture of this infamous city full of night life, iconic locations and unique people."
//               price="£1000"
//             />
//             <HolidayItem
//               id="2"
//               src="images/italy.jpg"
//               label="Luxuary"
//               title="Italy"
//               text="Where timeless beauty meets modern allure, filled with delectable cuisine, rich history, and breathtaking landscapes."
//               price="£1000"
//             />
//             <HolidayItem
//               id="3"
//               src="images/bali.jpg"
//               label="Relaxation"
//               title="Bali"
//               text="Where pristine beaches, lush landscapes, and vibrant culture create an unforgettable tropical retreat."
//               price="£1000"
//             />

//             <div className="flex justify-center">
//               <div
//                 className="block w-[386px] h-[450px] lg:w-[772px] lg:h-[300px] rounded bg-center bg-black/60 bg-blend-overlay bg-cover p-8 drop-shadow-lg"
//                 style={{
//                   backgroundImage: `url("images/tour-group-2.jpg")`,
//                 }}
//               >
//                 <h5 className="mb-4 text-3xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
//                   Add a Guided Tour to Your Package
//                 </h5>
//                 <p className="mb-8 text-lg text-white">
//                   Make your holiday one to remember with Jet Set's tour guide
//                   packages, available for all of our destinations. Find out more
//                   about the rich culture of our locations and let us help you
//                   discover the hidden gems they have to offer.
//                 </p>
//                 <Link to="/products">
//                   <Button buttonStyle="btn--blue" buttonSize="btn--medium">
//                     Discover More
//                   </Button>
//                 </Link>
//               </div>
//             </div>

//             <HolidayItem
//               id="4"
//               src="images/dubai.jpg"
//               label="Adventure"
//               title="Dubai"
//               text="Experience the epitome of luxury and innovation, dazzling skyscrapers, golden deserts, and world-class shopping await."
//               price="£1000"
//             />
//             <HolidayItem
//               id="5"
//               src="images/africa.jpg"
//               label="Adventure"
//               title="Africa"
//               text="Diverse landscapes, vibrant cultures, and awe-inspiring wildlife promise an unforgettable adventure."
//               price="£1000"
//             />
//             <HolidayItem
//               id="6"
//               src="images/cruise.jpg"
//               label="Cruise"
//               title="European Cruise"
//               text="Sail through the heart of Europe on a captivating cruise, where historic cities and scenic landscapes unfold."
//               price="£1000"
//             />

//             <div className="flex justify-center">
//               <div
//                 className="block w-[386px] h-[450px] lg:w-[772px] lg:h-[300px] rounded bg-center bg-black/60 bg-blend-overlay bg-cover p-8 drop-shadow-lg"
//                 style={{
//                   backgroundImage: `url("images/plane-tickets.jpg")`,
//                 }}
//               >
//                 <h5 className="mb-4 text-3xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
//                   Use Our Ticket Booker
//                 </h5>
//                 <p className="mb-8 text-lg text-white">
//                   We offer a ticket booking service to ensure you find the best
//                   deals hassle-free. Let us save you time and provide you with
//                   your flight preferences.
//                 </p>
//                 <Link to="/products">
//                   <Button buttonStyle="btn--blue" buttonSize="btn--medium">
//                     Discover More
//                   </Button>
//                 </Link>
//               </div>
//             </div>

//             <HolidayItem
//               id="7"
//               src="images/iceland.jpg"
//               label="Culture"
//               title="Iceland"
//               text="Dramatic landscapes, geothermal wonders, and the Northern Lights create a truly magical experience."
//               price="£1000"
//             />
//             <HolidayItem
//               id="8"
//               src="images/greece.jpg"
//               label="Relaxation"
//               title="Greece"
//               text="Ancient history, sun-kissed islands, and delectable cuisine converge to create a Mediterranean paradise."
//               price="£1000"
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Holiday;

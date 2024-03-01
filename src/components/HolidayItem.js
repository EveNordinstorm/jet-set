import React from "react";

function HolidayItem(props) {
  return (
    <>
      <div class="m-8 max-w-sm w-full lg:max-w-max lg:flex drop-shadow-lg">
        <div>
          <img
            class="h-48 w-96 lg:h-72 lg:w-96 rounded-t lg:rounded-l lg:rounded-tr-none object-cover text-center overflow-hidden"
            src={props.src}
            title="Image of holiday destination"
          />
        </div>
        <div class="lg:w-96 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="holiday__label text-sm flex items-center">
              {props.label}
            </p>
            <div class="text-gray-900 font-bold text-2xl mb-2">
              {props.title}
            </div>
            <p class="text-gray-700 text-base mb-4">{props.text}</p>
            <h2 class="mb-3 text-lg">{props.price}</h2>
            <btn class="holiday__btn">Book Now</btn>
          </div>
        </div>
      </div>
    </>
  );
}

export default HolidayItem;

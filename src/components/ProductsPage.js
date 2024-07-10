import React, { useState } from "react";
import { Button } from "./Button";

const ProductsPage = () => {
  const [images] = useState({
    img1: "images/tour-group-2.jpg",
    img2: "images/tour-bus.jpg",
    img3: "images/tour-group-1.jpg",
    img4: "images/tour-guide.jpg",
    img5: "images/plane-tickets.jpg",
    img6: "images/plane-sky.jpg",
    img7: "images/airport.jpg",
    img8: "images/plane-window-2.jpg",
  });

  const [activeImg1, setActiveImage1] = useState(images.img1);
  const [activeImg2, setActiveImage2] = useState(images.img5);

  const [amount, setAmount] = useState(1);

  return (
    <>
      <div className="grid lg:grid-cols-2 m-8 gap-4 md:gap-10">
        <div className="flex flex-col flex-wrap gap-6">
          <img
            src={activeImg1}
            alt=""
            className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row gap-6 lg:mb-4">
            <img
              src={images.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(images.img4)}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4 lg:mt-24 lg:w-2/4">
            <div>
              <span className="text-sky-500 font-semibold">Services</span>
              <h1 className="text-3xl font-bold">Guided Tour</h1>
            </div>
            <p className="text-gray-700">
              Make the most of your holiday by adding on our tour package,
              available for all of our destinations.
            </p>
            <h6 className="text-2xl font-semibold">£300</h6>
            <div className="items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-sky-500 text-3xl"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </button>
              <span className="py-4 px-6 text-xl">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-sky-500 text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            <Button buttonStyle="btn--blue" buttonSize="btn--medium">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 m-8 gap-4 md:gap-10">
        <div className="flex flex-col flex-wrap gap-6">
          <img
            src={activeImg2}
            alt=""
            className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row gap-6 lg:mb-4">
            <img
              src={images.img5}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage2(images.img5)}
            />
            <img
              src={images.img6}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage2(images.img6)}
            />
            <img
              src={images.img7}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage2(images.img7)}
            />
            <img
              src={images.img8}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage2(images.img8)}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4 lg:mt-24 lg:w-2/4">
            <div>
              <span className="text-sky-500 font-semibold">Services</span>
              <h1 className="text-3xl font-bold">Ticket Booker</h1>
            </div>
            <p className="text-gray-700">
              Use our service to find you the best deal on flights so all you
              have to worry about is what you need to pack!
            </p>
            <h6 className="text-2xl font-semibold">£50</h6>
            <div className="items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-sky-500 text-3xl"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </button>
              <span className="py-4 px-6 text-xl">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-sky-500 text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <Button buttonStyle="btn--blue" buttonSize="btn--medium">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

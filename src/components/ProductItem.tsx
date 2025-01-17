import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type ProductItemProps = {
  id: number;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  catagory: string;
  name: string;
  description: string;
  price: number;
};

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL ?? '';

if (!apiBaseUrl) {
  throw new Error("API base URL is not defined. Please set the REACT_APP_API_BASE_URL environment variable.");
}

export default function ProductItem({
  id,
  img1,
  img2,
  img3,
  img4,
  catagory,
  name,
  description,
  price,
}: ProductItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart();
  const quantity = getItemQuantity(id);

  const [activeImg1, setActiveImage1] = useState(`${apiBaseUrl.replace("/api", "")}/${img1}`);

  return (
    <>
      <div className="grid lg:grid-cols-2 m-8 gap-4 md:gap-10 my-24">
        <div className="flex flex-col flex-wrap gap-6 lg:ml-20">
          <img
            src={activeImg1}
            alt=""
            className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row gap-6 lg:mb-4">
            <img
              src={`${apiBaseUrl.replace("/api", "")}/${img1}`}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(`${apiBaseUrl.replace("/api", "")}/${img1}`)}
            />
            <img
              src={`${apiBaseUrl.replace("/api", "")}/${img2}`}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(`${apiBaseUrl.replace("/api", "")}/${img2}`)}
            />
            <img
              src={`${apiBaseUrl.replace("/api", "")}/${img3}`}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(`${apiBaseUrl.replace("/api", "")}/${img3}`)}
            />
            <img
              src={`${apiBaseUrl.replace("/api", "")}/${img4}`}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(`${apiBaseUrl.replace("/api", "")}/${img4}`)}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4 lg:mt-24 lg:w-2/4">
            <div>
              <span className="text-sky-600 font-semibold">{catagory}</span>
              <h1 className="text-3xl font-bold">{name}</h1>
            </div>
            <p className="text-zinc-700 text-lg">{description}</p>
            <h6 className="text-2xl font-semibold">{formatCurrency(price)}</h6>
            
            <div className="items-center">
            {quantity === 0 ? (
            <button className="text-xl text-white hover:bg-zinc-900 bg-sky-600 rounded py-2 px-6" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
            ) : (
            <div>
              <button
                className="text-white bg-sky-600 hover:bg-zinc-900 py-2 px-5 rounded-full text-3xl"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span className="py-4 px-6 text-xl">{quantity}</span>
              <button
                className="text-white bg-sky-600 hover:bg-zinc-900 py-2 px-5 rounded-full text-3xl"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

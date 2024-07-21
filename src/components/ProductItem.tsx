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

  const [activeImg1, setActiveImage1] = useState(img1);

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
              src={img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(img1)}
            />
            <img
              src={img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(img2)}
            />
            <img
              src={img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(img3)}
            />
            <img
              src={img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage1(img4)}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4 lg:mt-24 lg:w-2/4">
            <div>
              <span className="text-sky-500 font-semibold">{catagory}</span>
              <h1 className="text-3xl font-bold">{name}</h1>
            </div>
            <p className="text-gray-700">{description}</p>
            <h6 className="text-2xl font-semibold">{formatCurrency(price)}</h6>
            
            <div className="items-center">
            {quantity === 0 ? (
            <button className="" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
            ) : (
            <div>
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-sky-500 text-3xl"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span className="py-4 px-6 text-xl">{quantity}</span>
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-sky-500 text-3xl"
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

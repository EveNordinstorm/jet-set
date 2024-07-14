import React from "react";
import { Button } from "./Button";
import { useCart } from "../context/CartContext"
import holidayItems from "../data/holidays.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useCart()
  const item = holidayItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <>
      <div className="m-8 max-w-sm w-full lg:max-w-max lg:flex drop-shadow-lg">
        <div>
          <img
            className="h-48 w-96 lg:h-72 lg:w-96 rounded-t lg:rounded-l lg:rounded-tr-none object-cover text-center overflow-hidden"
            src={item.imgUrl}
            title="Holiday destination"
          />
        </div>
        <div className="lg:w-96 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="holiday__label text-sm flex items-center">
              {item.label}
            </p>
            <div className="text-gray-900 font-bold text-2xl mb-2">
              {item.title}
            </div>
            <p className="text-gray-700 text-base mb-4">{item.text}</p>
            <h2 className="mb-3 text-lg">{formatCurrency(item.price)}</h2>
            <button>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

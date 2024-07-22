import { useCart } from "../context/CartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItemProps } from "../types/productTypes";

export default function CartItem({ id, quantity, imgUrl, title, price }: CartItemProps) {
  const { removeFromCart } = useCart()

  return (
    <>
      <div className="m-8 max-w-sm w-full lg:max-w-max lg:flex drop-shadow-lg">
      {imgUrl && (
        <div>
          <img
            className="h-48 w-96 lg:h-72 lg:w-96 rounded-t lg:rounded-l lg:rounded-tr-none object-cover text-center overflow-hidden"
            src={imgUrl}
            alt={title}
          />
        </div>
      )}
        <div className="lg:w-96 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
          {title && <div className="text-zinc-900 font-bold text-2xl mt-2">{title}</div>}
            <h2 className="mb-3 mt-24 text-xl font-bold">{formatCurrency(price)}</h2>
            <button onClick={() => removeFromCart(id)} className="text-md text-white hover:bg-red-700 bg-zinc-900 rounded-full py-1 px-4">
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

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
            alt={title || "Product"}
          />
        </div>
      )}
        <div className="lg:w-96 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
          {title && <div className="text-gray-900 font-bold text-2xl mb-2">{title}</div>}
            <h2 className="mb-3 text-lg">{formatCurrency(price)}</h2>
            <button onClick={() => removeFromCart(id)}>
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

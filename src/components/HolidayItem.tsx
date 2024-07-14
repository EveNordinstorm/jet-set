import { useCart } from "../context/CartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type HolidaysItemProps = {
  id: number
  imgUrl: string
  label: string
  title: string
  text: string
  price: number
}

export default function HolidayItem({ id, imgUrl, label, title, text, price }: HolidaysItemProps) {
  const { 
    getItemQuantity, 
    addToCart,
    increaseCartQuantity, 
    decreaseCartQuantity, 
    removeFromCart 
  } = useCart()
  const quantity = getItemQuantity(id)

  return (
    <>
      <div className="m-8 max-w-sm w-full lg:max-w-max lg:flex drop-shadow-lg">
        <div>
          <img
            className="h-48 w-96 lg:h-72 lg:w-96 rounded-t lg:rounded-l lg:rounded-tr-none object-cover text-center overflow-hidden"
            src={imgUrl}
            title="Holiday destination"
          />
        </div>
        <div className="lg:w-96 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="holiday--label text-sm flex items-center">
              {label}
            </p>
            <div className="text-gray-900 font-bold text-2xl mb-2">
              {title}
            </div>
            <p className="text-gray-700 text-base mb-4">{text}</p>
            <h2 className="mb-3 text-lg">{formatCurrency(price)}</h2>
            <button onClick={() => addToCart(id)}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

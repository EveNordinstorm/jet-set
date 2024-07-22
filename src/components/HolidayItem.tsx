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
    addToCart
  } = useCart()
  const quantity = getItemQuantity(id)

  return (
    <>
    <div className="py-4 flex justify-center">
    <div className="max-w-sm w-full lg:max-w-max lg:flex drop-shadow-lg">
        <div>
          <img
            className="h-48 w-96 lg:h-72 lg:w-96 rounded-t lg:rounded-l lg:rounded-tr-none object-cover text-center overflow-hidden"
            src={imgUrl}
            title="Holiday destination"
          />
        </div>
        <div className="lg:w-96 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sky-600 font-semibold">
              {label}
            </p>
            <div className="text-zinc-900 font-bold text-2xl my-2">
              {title}
            </div>
            <p className="text-zinc-600 text-base mb-2">{text}</p>
            <h2 className="mb-2 text-lg">{formatCurrency(price)}</h2>
            <button className="text-lg text-white hover:bg-zinc-900 bg-sky-600 rounded py-1 px-6" onClick={() => addToCart(id)}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}

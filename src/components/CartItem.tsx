import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItemProps } from "../types/productTypes";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL ?? '';

if (!apiBaseUrl) {
  throw new Error("API base URL is not defined. Please set the REACT_APP_API_BASE_URL environment variable.");
}

export default function CartItem({ id, imgUrl, title, price }: CartItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <div className="m-8 max-w-sm w-full lg:max-w-max lg:flex drop-shadow-lg">
        {imgUrl && (
          <div>
            <img
              className="h-48 w-96 lg:h-72 lg:w-96 rounded-t lg:rounded-l lg:rounded-tr-none object-cover text-center overflow-hidden"
              src={`${apiBaseUrl.replace("/api", "")}/${imgUrl}`}
              alt={title}
            />
          </div>
        )}
        <div className="lg:w-96 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="flex justify-center lg:block">
            <div>
              {title && (
                <div className="text-center lg:text-left text-zinc-900 font-bold text-2xl mt-2">
                  {title}
                </div>
              )}
              <h2 className="text-center lg:text-left mb-3 mt-10 text-xl font-bold">
                {formatCurrency(price)}
              </h2>
              <div className="mt-6">
                <button
                  className="text-white bg-sky-600 hover:bg-zinc-900 py-1 px-4 rounded-full text-2xl"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <span className="py-4 px-6 text-xl">{quantity}</span>
                <button
                  className="text-white bg-sky-600 hover:bg-zinc-900 py-1 px-4 rounded-full text-2xl"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="text-md text-white hover:bg-red-700 bg-zinc-900 rounded py-2 px-4 mt-4"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

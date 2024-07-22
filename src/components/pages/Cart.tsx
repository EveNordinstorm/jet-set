import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import CartItem from "./../CartItem";
import Holidays from "../../data/holidays.json";
import Products from "../../data/products.json";
import { isHolidayItem, isProductItem } from "../../types/productTypes";

type CartProps = {
  isOpen: boolean,
};

export function Cart({ isOpen }: CartProps) {
  const items = [...Holidays,...Products]
  const { cartItems } = useCart();
  return (
    <div className="bg-sky-200">
    <h1 className="text-center text-3xl pt-12">Cart</h1>
    <div className="flex justify-center">
        <Stack gap={3}>
          {cartItems.map((cartItem) => {
            const item = items.find((i) => i.id === cartItem.id);
              if (item) {
              if (isHolidayItem(item)) {
                return (
                  <CartItem
                    key={cartItem.id}
                    id={cartItem.id}
                    quantity={cartItem.quantity}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    price={item.price}
                  />
                );
              } 
              else if (isProductItem(item)) {
                return (
                  <CartItem
                    key={cartItem.id}
                    id={cartItem.id}
                    quantity={cartItem.quantity}
                    imgUrl={item.img1}
                    title={item.name}
                    price={item.price}
                  />
                );
              }
            } else {
              return null;
            }
          })}
          <div className="text-center text-2xl pt-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = items.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <div className="flex justify-center mt-5 mb-20">
          <button className="text-xl text-white bg-sky-600 hover:bg-zinc-900 rounded py-2 px-4">Checkout</button>
          </div>
          
        </Stack>
    </div> 
    </div>
  );
}

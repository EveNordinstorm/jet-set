import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import Holidays from "../data/holidays.json";
import Products from "../data/products.json";
import { isHolidayItem, isProductItem } from "../types/productTypes";

type CartProps = {
  isOpen: boolean,
};

export function Cart({ isOpen }: CartProps) {
  const items = [...Holidays,...Products]
  const { closeCart, cartItems } = useCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
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
          <div className="">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = items.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

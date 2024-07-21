import Products from "../data/products.json";
import ProductItem from "./ProductItem.tsx";

export default function Product() {
  return (
    <>
      {Products.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </>
  );
}

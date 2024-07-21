export type HolidayItem = {
    id: number;
    imgUrl: string;
    title: string;
    price: number;
  };
  
  export type ProductItem = {
    id: number;
    img1: string;
    name: string;
    price: number;
  };
  
  export type CartItemProps = {
    id: number;
    quantity: number;
    imgUrl?: string;
    img1?: string;
    title?: string;
    price: number;
  };
  
  export function isHolidayItem(item: any): item is HolidayItem {
    return 'imgUrl' in item && 'title' in item;
  }

  export function isProductItem(item: any): item is ProductItem {
    return 'img1' in item && 'name' in item;
  }
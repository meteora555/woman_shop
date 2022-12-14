export interface Iproduct {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
  category?: string;
  count: number;
}
export interface CartSliceState {
  totalPrice: number;
  items: Iproduct[];
}

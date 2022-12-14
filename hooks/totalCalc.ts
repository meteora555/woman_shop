import { Iproduct } from '../store/product/product.type';

//будет время надо типизировать формулу

export const totalCalc = (items: any) => {
  return items.reduce((sum: any, obj: any) => obj.price * obj.count + sum, 0);
};

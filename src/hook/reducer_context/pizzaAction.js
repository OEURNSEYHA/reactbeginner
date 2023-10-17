import { BUY_PIZZA, ORDER_PIZZA } from "./pizzaType";

export const buyPizza = () => {
  return {
    type: BUY_PIZZA,
    buy2: 2,
  };
};

export const orderPizza = () => {
  return {
    type: ORDER_PIZZA,
    order: 20,
  };
};

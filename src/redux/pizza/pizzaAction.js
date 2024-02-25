import { BUYPIZZA, BUYPROMOTION } from "./pizzaType";

export const BuyPizza = () => {
  return {
    type: BUYPIZZA,
  };
};

export const BuyThreeFreeOne = (num = 3) => {
  return {
    type: BUYPROMOTION,
    payload: num,
  };
};

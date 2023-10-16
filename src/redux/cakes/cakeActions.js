import { BUY_CAKE, SELL } from "./cakeType";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const sellCake = () => {
  return {
    type: SELL,
  };
};

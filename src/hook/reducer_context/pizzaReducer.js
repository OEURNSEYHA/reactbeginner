import { BUY_PIZZA, ORDER_PIZZA } from "./pizzaType";

export const reducer = (state, action) => {
  switch (action.type) {
    case BUY_PIZZA: {
      return {
        ...state,
        numOfPizza: state.numOfPizza + action.buy2,
      };
    }

    case ORDER_PIZZA: {
      return {
        ...state,
        numOfOrder : state.numOfOrder + action.order,
      };
    }
    default:
      return state;
  }
};

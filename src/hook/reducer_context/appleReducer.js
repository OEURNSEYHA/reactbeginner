import {  ORDER_PIZZA } from "./pizzaType";

export const appleReducer = (state, action) => {
  switch (action.type) {
   

    case ORDER_PIZZA: {
      return {
        ...state,
        numOfPizza: state.numOfPizza + action.order,
      };
    }

    default:
      return state;
  }
};

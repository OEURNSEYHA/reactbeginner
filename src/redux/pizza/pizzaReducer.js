import { BUYPIZZA, BUYPROMOTION } from "./pizzaType";

const initalState = {
  numOfPizza: 0,
  numOfPromotion: 3,
};

const pizzaReducer = (state = initalState, action) => {
  switch (action.type) {
    case BUYPIZZA:
      return {
        ...state,
        numOfPizza: state.numOfPizza + 1,
      };
    case BUYPROMOTION:
      return {
        ...state,
        numOfPromotion: state.numOfPromotion + parseInt(action.payload),
      };
    default:
      return state;
  }
};

export default pizzaReducer;

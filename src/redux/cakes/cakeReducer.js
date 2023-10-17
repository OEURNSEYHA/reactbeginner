import { BUY_CAKE, SELL } from "./cakeType";

const initialState = {
  numOfCakes: 10,
  numOfSell : 2
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case SELL :
      return {
        ...state,
        numOfSell: state.numOfSell + 1
      }

    default:
      return state;
  }
};

export default cakeReducer;

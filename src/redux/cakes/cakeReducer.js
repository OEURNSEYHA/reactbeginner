import { BUY_CAKE, SELL } from "./cakeType";

const intallState = {
  numOfCakes: 10,
};

const cakeReducer = (state = intallState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case SELL :
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1
      }

    default:
      return state;
  }
};

export default cakeReducer;

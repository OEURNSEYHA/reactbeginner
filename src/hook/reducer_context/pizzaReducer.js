
import { BUY_PIZZA } from "./pizzaType";


export const reducer = (state, action) => {
    switch (action.type) {
        case BUY_PIZZA : {
            return {
                ...state,
                numOfPizza : state.numOfPizza + action.buy2
            }
        }

        default : return state
    }
}


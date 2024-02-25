import { combineReducers } from "@reduxjs/toolkit";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./icecream/icecreamReducer";
import userReducer from "./user/userReducer";
import pizzaReducer from "./pizza/pizzaReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  pizza: pizzaReducer,
});

export default rootReducer;

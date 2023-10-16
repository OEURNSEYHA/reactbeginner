import { createStore } from "redux";
// import cakeReducer from "../redux/cakes/cakeReducer";
// import iceCreamReducer from "./icecream/icecreamReducer";

import rootReducer  from './rootReducer';

const store = createStore(rootReducer);

export default store;

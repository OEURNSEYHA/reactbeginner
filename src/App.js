import React from "react";
import { UserGloableState } from "./hook/reducer_context/Gloable";
import { buyPizza } from "./hook/reducer_context/pizzaAction";

function App() {
  const { buy, dispatch } = UserGloableState();
  return <>
  {buy.numOfPizza}
  <button onClick={()=>dispatch(buyPizza())}>
     BUY PIZZA
  </button>
  </>;
}

export default App;

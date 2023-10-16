import React from "react";

import { UserGloableState } from "./hook/reducer_context/Gloable";
import { buyPizza } from "./hook/reducer_context/pizzaAction";



function App() {
  const { count, dispatch } = UserGloableState();
  return (
    <>
      {count.numOfPizza}
      <button
        onClick={() => {
          dispatch(buyPizza());
        }}
      >
        Increment
      </button>
    </>
  );
}

export default App;

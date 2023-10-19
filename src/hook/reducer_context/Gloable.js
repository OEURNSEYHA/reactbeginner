import React, { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "./pizzaReducer";

const GloableState = createContext("heo");

export const UserGloableState = () => useContext(GloableState);

const initialState = {
  numOfPizza: 0,
  numOfOrder: 20,
};

function Gloable({ children }) {
  const firstName = "seyha";
  const [buy, dispatch] = useReducer(reducer, initialState);
  const [buy2, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <GloableState.Provider
      value={{ firstName, buy, dispatch, buy2, dispatchTwo }}
    >
      {children}
    </GloableState.Provider>
  );
}

export default Gloable;

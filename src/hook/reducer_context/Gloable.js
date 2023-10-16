import React, { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "./pizzaReducer";

const GloableState = createContext("hello");
export const UserGloableState = () => useContext(GloableState);

const initialState = {
  numOfPizza: 0,
}; 


function Gloable({ children }) {
  const firstName = "seyha";
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <GloableState.Provider value={{ firstName, count, dispatch }}>
      {children}
    </GloableState.Provider>
  );
}

export default Gloable;

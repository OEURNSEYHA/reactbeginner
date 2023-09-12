import React, { useReducer } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'

const GloableState = createContext();
export const UserGloableState = () => useContext(GloableState);

const initialState = 0;
const reducer = (state, action) => {
  if(action.type === 'increment'){
    return state + 1
  }else if(action.type === 'decrement'){
    return state - 1
  }else if(action.type === 'reset'){
    return initialState
  }else{
    return state
  }
}

function Gloable({children}) {
    const firstName = "seyha"
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <GloableState.Provider value={{firstName, count, dispatch}}>
        {children}
    </GloableState.Provider>
  )
}

export default Gloable
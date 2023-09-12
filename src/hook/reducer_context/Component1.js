import React from 'react'
import { UserGloableState } from './Gloable'

function Component1() {
  const {firstName, count, dispatch} = UserGloableState();
  return (
    <>
    <div> {firstName}</div>
    <div> Count = {count}</div>
    <button onClick={()=> dispatch({type: 'increment'})}> Increment </button>
    <button onClick={()=> dispatch({type: 'decrement'})}> Decrement </button>
    <button onClick={()=> dispatch({type:'reset'})}> Reset</button>
    </>
    
  )
}

export default Component1
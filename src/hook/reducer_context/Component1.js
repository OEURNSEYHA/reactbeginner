import React from 'react'
import { UserGloableState } from './Gloable'

function Component1() {
  const {count, dispatch , a} = UserGloableState();
  
  return (
    <>
    <div> {count}</div>
    <div> {a}</div>
    <div> Count = {count}</div>
    <button onClick={()=> dispatch({type: 'increment'})}> Increment </button>
    <button onClick={()=> dispatch({type: 'decrement'})}> Decrement </button>
    <button onClick={()=> dispatch({type:'reset'})}> Reset</button>
    </>
    
  )
}

export default Component1
import React, {useReducer } from 'react'

const initialState = 0
const reducer = (state, action) =>{
   switch(action){
    case 'increment' :
        return state + 1
    case 'decrement' : 
        return state - 1
    case 'reset' : 
        return initialState
    default :
        return state
   }
}

function CounterOne(props) {
    const [count, dispatch] = useReducer(reducer, initialState);
console.log(props)
  return (
    <div>
        <div> Coun - {count} </div>
        <button onClick={()=> dispatch('increment')}> Increment </button>
        <button onClick={()=> dispatch('decrement')}> Decrement </button>
        <button onClick={()=> dispatch('reset')}> Reset </button>
 
    </div>
  )
}

export default CounterOne

// simple state;
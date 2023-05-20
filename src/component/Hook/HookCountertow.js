import React, { useState } from 'react'

function HookCountertow() {
    const initalCount = 0
    const [ count, setCount] = useState(initalCount);
    function reset(){
        setCount(initalCount)
    }
    function increment(){

        setCount(count + 1);

    }

    function incrementFive(){
        for(let i=0; i<5; i++){
             setCount(preCount => preCount  + 1)
        }
       
    }

    function decrement(){
        setCount( count - 1);
    }

    function decrementFive(){
        for(let i =0; i<5; i++){
            setCount(preCount => preCount -1)
        }
    }

  return (
    <div>
        <button onClick={ ()=>{reset()}}> Reset </button>
        <button onClick={()=>{increment()}}> +Increment </button>
        <button onClick={()=>{incrementFive()}}> +5Increment </button>
        <button onClick={()=>{decrementFive()}}> -5Decrement </button>
        <button onClick={()=>{decrement()}}> -decrement</button>
        <span> Counter:  {count }</span>
        
    </div>
  )
}

export default HookCountertow
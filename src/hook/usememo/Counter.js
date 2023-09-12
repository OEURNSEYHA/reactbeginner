import React, { useState } from 'react'
import { useMemo } from 'react';

function Counter() {

    const [ counterOne, setCounterOne ] = useState(0);
    const [ counterTow, setCounterTow ] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
        console.log("1")

    }

    const incrementTwo = () => {
        setCounterTow(counterTow + 2)
        console.log("2")
    }

    const isEven = useMemo(()=> {

        console.log("hello")
        let i = 0
        while (i < 200000000) i++
        return counterOne % 2 === 0 ;

    }, [counterOne])

   

  return (
    <>
        <button onClick={()=> incrementOne()}> Count One - {counterOne} </button>
        <span> { isEven ? 'Even' : 'Odd'}</span><br/>
        <button onClick={()=> incrementTwo()}> Count Two - {counterTow}  </button>
    </>
  )
}

export default Counter
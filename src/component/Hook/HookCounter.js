import React from 'react'
import { useState } from 'react'

function HookCounter() {
    const [count, setCount ] = useState(0);
    function counter(){
        setCount ( counter + 1)  
    }
  return (
    <div>
        <button onClick = { ()=>{ counter() }  }> Count {count} Time</button>
    </div>
  )
}

export default HookCounter
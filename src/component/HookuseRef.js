import React, { useRef } from 'react'

function HookuseRef() {
    // const [name, setName] = useState("");
    // const [count, setCount] = useState(0);

    const testRef = useRef();
    const update =()=>{
        testRef.current.style.background = "blue";
        testRef.current.style.marginLeft = "0";
    }
    console.log(testRef.current);
    return (
       <div>
         <h1 ref={testRef} style={{height:"800px", width:"300px",background:"red",marginLeft:"-100%"}}> i refreshed {testRef.current + 1}</h1>
         <button onClick={update}> Update Name</button>
       </div>
    )
}

export default HookuseRef;
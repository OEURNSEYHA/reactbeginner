import React, { useState } from "react";
import { useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTow, setCounterTow] = useState(0);
  const [isClick, setIsClick] = useState(false);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
    console.log("counterOne =" + counterOne);
  };

  const incrementTwo = () => {
    setCounterTow(counterTow + 2);
    console.log("counterTow =" + counterTow);
  };

  const handleClick = () => {
    // return () => {
    setIsClick(true);
    alert("Hello!");
    // };
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <button onClick={() => incrementOne()}> Count One - {counterOne} </button>
      <button onClick={() => handleClick()}>
        {isClick}
        Alert
      </button>
      <span> {isEven ? "Even" : "Odd"}</span>
      <br />

      <button onClick={() => incrementTwo()}> Count Two - {counterTow} </button>
    </>
  );
}

export default Counter;

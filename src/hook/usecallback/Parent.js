import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
function Parent() {

  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary])

  return (
    <>

      <Title />
      
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}> InCrementAge </Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}> InCrementSalary </Button>
    
    </>
  );
}

export default Parent;

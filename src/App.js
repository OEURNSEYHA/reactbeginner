import React from "react";
import { UserGlobleContext } from "./component/Context/Context";


function App() {
  const {firstName, setFirstName} = UserGlobleContext();
  return (
    <>
      <button onClick={()=> setFirstName("hello")}>  {firstName}   </button>
  
    </>
  );
}

export default App;

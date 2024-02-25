import React from "react";
import Counter from "./hook/usememo/Counter";
import CakeContainer from "./redux/component/CakeContainer";
// import ItemContainer from "./redux/component/ItemContainer";
// import IceCreamContainer from "./redux/component/IceCreamContainer"
import Basicstyle from "./component/Basicstyle";
import CounterOne from "./component/reducer/CounterOne";
import UserInsert from "./component/reducer/UserInsert";


function App() {
 

  return (
    <>
    <Basicstyle name="seyha"/>
      <Counter />
      <CakeContainer/>
      {/* <IceCreamContainer/>
      <ItemContainer icecream/> */}

  <CounterOne/>
      <UserInsert/>
    </>
  );
}

export default App;

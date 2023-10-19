import React from "react";
import CakeContainer from "./redux/component/CakeContainer"
import NewCakeContainer from "./redux/component/NewCakeContainer";
import ItemContainer from "./redux/component/ItemContainer";
function App() {
  
  return (
    <>
      <CakeContainer/>
      <NewCakeContainer/>
      <ItemContainer cake/>
      <ItemContainer />

    </>
  );
}

export default App;

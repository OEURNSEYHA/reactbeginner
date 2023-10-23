import React from "react";

import CakeContainer from "./redux/component/CakeContainer"
import NewCakeContainer from "./redux/component/NewCakeContainer";
import ItemContainer from "./redux/component/ItemContainer";
import UserContainer from "./redux/component/UserContainer";

function App() {
  
  return (
    <>

   

      <CakeContainer/>
      <NewCakeContainer/>
      <ItemContainer />
      <ItemContainer cake/>

      <UserContainer/>

    </>
  );
}

export default App;

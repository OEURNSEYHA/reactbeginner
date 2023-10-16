import React from "react";
import CakeContainer from "./redux/component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookContainer from "./redux/component/HookContainer";
import IceCreamContainer from "./redux/component/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HookContainer />
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;

import React from "react";
import CakeContainer from "./redux/component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/cakes/store";
import HookContainer from "./redux/component/HookContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HookContainer/>
      </div>
    </Provider>
  );
}

export default App;

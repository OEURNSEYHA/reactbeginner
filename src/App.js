import React from "react";
import CakeContainer from "./redux/component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/cakes/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;

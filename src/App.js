import React from "react";
import { createContext } from "react";
const UserContext = createContext()
function App() {
  
  return (
    <>

    <UserContext.Provider value={"helo"}>

    </UserContext.Provider>
    </>
  );
}

export default App;

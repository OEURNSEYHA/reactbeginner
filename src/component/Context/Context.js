// Context.js (Create and provide the context)
import React, { createContext, useState } from "react";
import { useContext } from "react";

const GlobleContext = createContext();

export const UserGlobleContext = () => useContext(GlobleContext);

const Context = ({ children }) => {
   const [firstName, setFirstName] = useState("seyha"); // You can set an initial value here
   
  // const firstName = "hello";
  return (
    <GlobleContext.Provider value={{ firstName, setFirstName }}>
      {children}
    </GlobleContext.Provider>
  );
};

export default Context;
// export {  UserGlobleContext , UserGlobleContext};

// 1 crate the context
// 2 provider context value
// 3 Consume the contex value

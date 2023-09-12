// GlobalState.js (context file)
import React, { createContext } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const firstName = "seyha";

  return (
    <UserContext.Provider value={{ firstName }}>
      {children}
    </UserContext.Provider>
  );
}

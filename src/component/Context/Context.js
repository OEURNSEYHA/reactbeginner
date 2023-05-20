import React from "react";
const UserContext = React.createContext('Codevolution');

const UseProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UseProvider, UserConsumer }
export default UserContext;

// 1 crate the context 
// 1 create the context 
// 2 providea context value
// 3 Consume tthe contex value 

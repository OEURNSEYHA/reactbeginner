import {React, createContext, useState, useContext} from 'react'
const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
    const [user, setUser ] = useState(null);
    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

// function Auth() {
//   return (
//     <div>Auth</div>
//   )
// }

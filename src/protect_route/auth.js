import axios from "axios";
import { createContext, useContext, useState } from "react";
const AuthContext = createContext("");

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (user) => {
    setUser(user);
  };

  const logout = async () => {
    setUser(null);
    try {
      await axios.post('http://localhost:8080/api/v1/logout');
      document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
      localStorage.clear();
      window.location.href = '/login';
    } catch (err) {
      // Handle the error
      // For example, you could display an error message to the user
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { useState } from "react";
// import { useAuth } from "./auth";
// import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  // const [user, setUser] = useState('');
  // const auth = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    axios
      .post("http://localhost:8080/api/v1/login", { email, password })
      .then((response) => {
        if (email !== "" && !password !== "") {
          // console.log(result.data);

          console.log(response.data);

          document.cookie = `token=${response.data.token}; path=/,  expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true, // Make sure to set this for HTTPS
    sameSite: "Strict", // Recommended for added security `;
          // navigate(redirectPath, { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const redirectPath = location.state?.path || "/";
  return (
    <div>
      Login
      <label>
        Email : {""}
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}> Login </button>
    </div>
  );
}

export default Login;

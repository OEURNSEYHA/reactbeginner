import React, { useEffect } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Cookies from "js-cookie";

function Profile() {
  const auth = useAuth();
  console.log(auth.user)
  const navigate = useNavigate();
  const handleLogOut = () => {
    auth.logout();
    navigate("/");
  };

  // const accessToken = Cookies.get("accessToken");

  const fetch = () => {
    axios
      .get("http://localhost:8080/api/v1/me",
      {
        withCredentials: true
      })
      .then((result) => {
        console.log(result.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <div>Profile {auth.user}</div>
      <button onClick={handleLogOut}> Logout</button>
    </div>
  );
}

export default Profile;

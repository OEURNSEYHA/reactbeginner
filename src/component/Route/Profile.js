import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth'
function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handlerLogin = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <div>
        <h1> Profile </h1>
        {
          
          auth.user
        }
        <button onClick={handlerLogin}> Logout </button>
    </div>
  )
}

export default Profile
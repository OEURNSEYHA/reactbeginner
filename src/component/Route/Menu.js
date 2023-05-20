import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './Auth';
import './Menu.css';
function Menu() {
  const auth = useAuth();
  return (
    <div className='menu'>
        <Link to="/"> Hi </Link>
        <Link to="hello"> Helo </Link>
        <Link to="product"> Product </Link>
        <Link to ="profile"> Profile </Link>
        {
          !auth.user && (
            <Link to='/login'> Login </Link>
          )
        }
    </div>
  )
}

export default Menu
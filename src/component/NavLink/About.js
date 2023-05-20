import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function About() {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="">Team</NavLink>
          </li>
          <li>
            <NavLink to="history">History</NavLink>
          </li>
        </ul>
      </nav>

     <Outlet/>
    </div>
  )
}

export default About
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Hi() {
  return (
    <>
         <div>

            <Link to="How"> How</Link>
            <Link to="what"> What </Link>

        </div>
        <Outlet/>
    </>
   
  )
}

export default Hi;
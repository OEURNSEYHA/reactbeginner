import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function How() {
  return (
    <>
      <div>
        How
        <Link to="y"> Y </Link>
        <Link to=""> Z</Link>
      </div>
      <Outlet/>

    </>
    
  )
}

export default How
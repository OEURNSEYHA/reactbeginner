import React from 'react'

function Functionprops(props) {
  // const { name, children } = props; destructuring props;
  return (
    <div className='p-10 bg-red-500'>
      
        <h1 className='text-black'> { props.name } </h1>
        {props.children}

    </div>
  )
}

export default Functionprops

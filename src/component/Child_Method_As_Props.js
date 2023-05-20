import React from 'react'

function Child_Method_As_Props(props) {
  return (
    <>
      <button onClick={ () => props.HandlingChildren( 'hello ')  }> Click handling Method As Props </button>
    </>
  )
}

export default Child_Method_As_Props;
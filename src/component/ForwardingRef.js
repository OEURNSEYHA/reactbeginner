import React from 'react'

const ForwardingRef =React.forwardRef((props, ref) => {
  return (
    <div>
        <input
            type='text'
            placeholder='username'
            ref = { ref }
            
        />
    </div>
  )
})

export default ForwardingRef
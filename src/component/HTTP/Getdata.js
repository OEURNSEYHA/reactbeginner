import React from 'react'
function Getdata({items}) {
   
  return (
    <div>
      {
        items.map((e,i)=>
            <>
                <p> {e.price}   </p>
                <img src={e.image} alt=""/>
            </>
        )
      }
    </div>
  )
}

export default Getdata
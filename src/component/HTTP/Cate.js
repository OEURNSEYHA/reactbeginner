import React from 'react';
import '../HTTP/Cate.css';
function Cate({item}) {
  return (
    
    <div className='item-product'>
      <img src={item.image} alt = ""/> 
    </div>

  )
}

export default Cate
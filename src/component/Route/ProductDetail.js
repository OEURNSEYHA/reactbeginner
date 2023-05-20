import React from 'react'
import { useParams } from 'react-router-dom';
function ProductDetail() {
    // const params = useParams();
    // const productID = params.productID;

    const {productID }= useParams();
    
  return (
    
    <div>ProductDetail
        {productID}
    </div>
  )
}

export default ProductDetail
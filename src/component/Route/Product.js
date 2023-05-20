import React from 'react'

import { Link, Outlet, useSearchParams } from 'react-router-dom';
function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get('filter') === 'active';
  
  return (
    <div>
      <Link to="productdetail"> ProductDetail  </Link>

        <div>
          <button onClick={()=> setSearchParams({filter : 'active'})}> Active Product </button>
          <button onClick={()=> setSearchParams({})}> Reset Active</button>
        </div>


        {
          // alert(showActiveUser)
          showActiveUser ? (<h1> Show active product</h1>) :( <h1> Show all product</h1>)

        }
      <Outlet/>
    </div>
  )
}

export default Product
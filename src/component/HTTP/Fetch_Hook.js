import React, { useEffect, useState } from 'react'
import Cate from './Cate';
import '../HTTP/Cate.css'
function Fetch_Hook() {
    const [datas, setdata] = useState([]);
    const AllData = async () =>{
        const url = ('https://fakestoreapi.com/products');
        const res = await fetch(url)
        .then(res =>  res.json());
        setdata(await res);
        console.log( await res);
    }
    useEffect(()=>{
        AllData();
    },[])
    
// const [top, settop] = useState([]);

  return (

    <>
      <div className='product-women'>
        <p> Product women </p>
        {
          
          datas.filter(type => type.category === "women's clothing" ).map((filtercate, id)=>
            <Cate item={filtercate}/>
          )
          
        }
      </div>
      <div className='product-women'>
        <p> Product women </p>
        {
          
          datas.filter(type => type.category === "men's clothing" ).map((filtercate, id)=>
            <Cate item={filtercate}/>
          )
          
        }
      </div>
    </>
  )
}

export default Fetch_Hook;
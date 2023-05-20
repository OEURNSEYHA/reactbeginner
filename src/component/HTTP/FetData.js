import { React, useEffect } from 'react'

import { useState } from 'react';

import './FetData.css'


function FetData() {

  const [data, setData] = useState([]);
  const fetchData = async () => {
    
      const url =('http://localhost:8000/api/products');
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      
      
    
  };

  useEffect(() => {

    fetchData();

  }, []);





  return (
    <div className='cate-product'>
      
        {
         data.map((item,id)=>(
          <div className='item-product'>
            <div className='cate-more'>
                <div className='box-imgmore'>
                    <img src={item.image} alt=''/>
                </div>
               
                
            </div>
            <div className='box-img'>
              <img  src={item.image} alt=''/>
            </div>
            <span>{item.des}</span>
            <span className='price'>Price : {item.price}$</span>
            <div className='btn-add'>
              <span>BUY NOW</span>
            </div>
          </div>
          
         ))
        }

    </div>
  )
}

export default FetData
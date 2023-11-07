import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../icecream/icecreamAction'

function IceCreamContainer(props) {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
  return (
    <div>
        <h1> Num of IceCream - {numOfIceCreams}</h1>
        <button onClick={() => {dispatch(buyIceCream())}}> Buy IceCream  </button>
    </div>
  )
}

export default IceCreamContainer
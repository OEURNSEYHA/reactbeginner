import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { sellCake } from '../cakes/cakeActions'

export const NewCakeContainer = () => {
  const [num, setNum] = useState(1);
  const numOfSell = useSelector((state) => state.cake.numOfSell);
  const dispatch = useDispatch();
  return (
    <div>NewCakeContainer
       <h2> Number of cakes = {numOfSell} </h2>
      <input type='text' value={num} onChange={e => setNum(e.target.value)}/>
      <button onClick={()=> dispatch(sellCake(num))}> Buy {num} </button>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.cake.numOfCakes,
//     numOfSell: state.cake.numOfSell
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sellCake: (num) => dispatch(sellCake(num)),
//     buyCake: ()=> dispatch(buyCake())
//   };
// };

export default NewCakeContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
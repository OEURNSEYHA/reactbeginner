import React from "react";
import {buyCake, sellCake} from '../../redux'
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2> Number of cakes = {props.numOfCakes} </h2>
      <button onClick={props.buyCake}> Buy Cake </button>
      <button onClick={props.sellCake}> Buy Cake </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sellCake: () => dispatch(sellCake()),
    buyCake: ()=> dispatch(buyCake())
  };
};


// const inCrement = dispatch => {
//   return {
//     sellCake: () => dispatch(sellCake()),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

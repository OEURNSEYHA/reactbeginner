import React from "react";
import {buyCake, sellCake} from '../../redux'
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2> Number of cakes = {props.numOfCakes} numOfSell - {props.numOfSell} </h2>
      <button onClick={props.buyCake}> Buy Cake </button>
      <button onClick={props.sellCake}> Buy Cake </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    numOfSell: state.cake.numOfSell
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sellCake: () => dispatch(sellCake()),
    buyCake: ()=> dispatch(buyCake())
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

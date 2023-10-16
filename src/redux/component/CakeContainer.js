import React from "react";
import { buyCake } from "../../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2> Number of cakes = {props.numOfCakes} </h2>
      <button onClick={props.buyCake}> Buy Cake </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDisppatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake),
  };
};

export default connect(mapStateToProps, mapDisppatchToProps)(CakeContainer);

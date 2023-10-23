import React from "react";
import { connect, } from "react-redux";
// import { buyCake } from "../cakes/cakeActions";
// import { buyIceCream } from "../icecream/icecreamAction";

export const ItemContainer = (props) => {

  

  return (
    <div>
      ItemContainer Item {props.item}
      <button onClick={props.buyItem}> BUY Item </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  console.log(ownProps.cake);
  return {
    item: itemState,
  };
};

// const mapDispatchToProp = (dispatch, ownProps) => {
//   const dispatchFunction = ownProps.cake
//     ? () => dispatch(buyCake())
//     : () => dispatch(buyIceCream());
//   return {
//     buyItem: dispatchFunction,
//   };
// };

export default connect(mapStateToProps, null)(ItemContainer);

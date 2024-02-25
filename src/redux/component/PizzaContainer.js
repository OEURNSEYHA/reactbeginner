import React from "react";
import { connect } from "react-redux";
import { BuyPizza, BuyThreeFreeOne  } from "../pizza/pizzaAction";

export const PizzaContainer = ({BuyPizza, BuyThreeFreeOne, numOfPizza, numOfPromotion}) => {
  return <div>PizzaContainer

    <button onClick={ BuyPizza}>  Buy Pizza  :  {numOfPizza}</button>
    <button onClick={ BuyThreeFreeOne}>  Buy Pizza 3 Free 1  :  {numOfPromotion}</button>
  </div>;
};

const mapStateToProps = (state) => {
  return {
    numOfPizza: state.pizza.numOfPizza,
    numOfPromotion: state.pizza.numOfPromotion,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    BuyPizza: () => dispatch(BuyPizza()),
    BuyThreeFreeOne : () => dispatch(BuyThreeFreeOne()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);

import React from "react";
// import { connect, useSelector } from 'react-redux'
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../redux";

export const HookContainer = (props) => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Num of cakes - {numOfCakes} </h1>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy cake
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => ({})
// const mapDispatchToProps = {}
// export default connect(mapStateTopProps, mapDispatchToProp)(HookContainer);


export default HookContainer;

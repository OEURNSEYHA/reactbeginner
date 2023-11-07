import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../user/fetchUsers";


export const UserContainer = () => {
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers())

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(userData);

  return userData.loading ? (
    <h2> loading...</h2>
  ) : userData.error ? (<h2> {userData.error} </h2>) : (
    <div> {userData && userData.users && userData.users.map((user, id)=>(
    <p key={id}> {user.name}</p>
    ))}</div>
  )
};

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };

export default UserContainer;

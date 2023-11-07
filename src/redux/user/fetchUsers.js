import axios from "axios";
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "./userAction";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
    
        const users = response.data;
        dispatch(fetchUsersSuccess(users));

      })
      .catch((err) => {
        console.log(err);
        const errorMsg = err.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

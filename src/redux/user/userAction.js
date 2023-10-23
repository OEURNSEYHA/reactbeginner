import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType"


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}


export const fetchUsers = () => 
{
    return (dispatch) =>{
        dispatch(fetchUsersRequest)
        axios.get('https://business-cambodia.com/cms/items/categories?filter[status]=published&fields=name,%20description,%20thumbnail,%20slug,%20articles.views,articles.title,%20%20articles.category.name,articles.thumbnail,%20articles.user_created.first_name,%20articles.user_created.avatar,articles.views,articles.user_created.last_name,%20articles.date_created,articles.category.slug,%20articles.slug&deep[articles][_limit]=4&deep[articles][_sort]=-date_created&deep[articles][_filter][status]=published&sort=order')
        .then((result) => {
            const users = result.data.data;
            console.log(result.data.data)
            dispatch(fetchUsersSuccess(users))
        }).catch((err) => {
            console.log(err);
            const errorMsg = err.message
            dispatch(fetchUsersFailure(errorMsg))
        });
    }
}
import Axios from "axios";

export const FETCHING_USER_START = "FETCHING_USER_START";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const FETCHING_USER_FAILURE = "FETCHING_USER_FAILURE";

export const getUserAC = (index) => dispatch => {
    dispatch({ type: FETCHING_USER_START });
    Axios
        .get(`BACKEND USER DATABASE`)
        .then(res => {
            dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_USER_FAILURE, payload: err });
        });
};

import Axios from "axios";

export const FETCHING_USER_START = "FETCHING_USER_START";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const FETCHING_USER_FAILURE = "FETCHING_USER_FAILURE";

export const POST_ENTRY = 'POST_ENTRY';
export const PUT_ENTRY = 'PUT_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export const getUserAC = (index) => dispatch => {
    dispatch({ type: FETCHING_USER_START });
    Axios
        .get(`https://olad-backend.herokuapp.com/entries`)
        .then(res => {
            dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_USER_FAILURE, payload: err });
        });
};


export const postEntryAC = (entry) => dispatch => {
    dispatch({ type: POST_ENTRY });
    console.log('Posting entry:', entry)
    Axios
        .post(`https://olad-backend.herokuapp.com/entry`, entry)
        .then(res => {
            dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_USER_FAILURE, payload: err });
        });
};

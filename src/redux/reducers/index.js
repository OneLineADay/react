import {
    FETCHING_USER_START,
    FETCHING_USER_SUCCESS,
    FETCHING_USER_FAILURE
} from '../actions';


export const initialState = {
    user: '',
    entries: [
    'This is a test',
    'This is a test',
    'This is a test123',
    'This is a test',
    'This is a test',
    'This is a test',
    'This is a test'],
    isFetching: false,
    error: ''
};



export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_USER_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };

      case FETCHING_USER_SUCCESS:
        return {
          ...state,
          isFetching: false,
            
        };

        case FETCHING_USER_FAILURE: 
        return{
            ...state,
            isFetching: false,
            error: action.payload
        }

      default:
        return state;
    }
  };
  
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/actionTypes';
const savedUser = JSON.parse(localStorage.getItem('loggedInUser'));

const initialState = {
  isAuthenticated: !!savedUser, 
  user: savedUser || null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload, 
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
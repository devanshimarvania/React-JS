import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';

const USERS_URL = 'http://localhost:5000/users';

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const response = await fetch(USERS_URL);
    const users = await response.json();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: 'Invalid username or password' });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: 'Server error. Is JSON Server running?' });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('loggedInUser');
  dispatch({ type: LOGOUT });
};
// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

// Action Creator
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

// Action Creator
const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

// Thunk
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  console.log("DATA.USER", data.user); //! i added
  dispatch(setUser(data.user));
  return response;
};

const initialState = { user: null };

// Reducer
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      console.log(action.payload);
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

// Reducer?? After epiphany: I think this is a Thunk Bhav
export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

// Sign Up Thunk action test
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export default sessionReducer;
//! File Doesn't Work, Jesse (prev, next state doesn't update)
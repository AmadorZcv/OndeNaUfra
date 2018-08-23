import { LOGIN, LOG_OUT, CHANGE_USER } from "./types";

const initialState = {
  isLogged: false,
  user: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogged: true };
    case LOG_OUT:
      return { ...state, isLogged: false, user: undefined };
    case CHANGE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

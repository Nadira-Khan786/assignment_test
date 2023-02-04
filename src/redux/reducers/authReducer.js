import { LOGIN_SUCCESS, SET_LOADING, LOGIN_FAILED } from "../actions";

const initialState = {
  isLoading: false,
  jwtToken: sessionStorage.getItem("jwt_token") || "",
  loginError: "",
  loggedIn: sessionStorage.getItem("jwt_token") ? true : false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default authReducer;

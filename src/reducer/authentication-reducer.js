import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../action/authentication-action";

export const reducer = (preState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...preState, isAuthenticating: true };
    case LOGIN_SUCCESS:
      return {
        ...preState,
        isAuthenticated: true,
        isAuthenticating: false,
        token: action.data.token,
        userInfo: action.data.userInfo,
        errorMessage: null,
      };
    case LOGIN_FAILED:
      return { ...preState, isAuthenticated: false, isAuthenticating: false, errorMessage: action.data.message };
    case LOGOUT:
      return {
        ...preState,
        isAuthenticated: false,
        isAuthenticating: false,
        token: null,
        userInfo: null,
        errorMessage: null,
      };
    default:
      throw new Error();
  }
};

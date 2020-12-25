import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  CHANGE_INFO_SUCCESS,
  CHANGE_INFO_FAILED,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED,
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
      return {
        ...preState,
        isAuthenticated: false,
        isAuthenticating: false,
        errorMessage: action.data.message,
      };
    case LOGOUT:
      return {
        ...preState,
        isAuthenticated: false,
        isAuthenticating: false,
        token: null,
        userInfo: null,
        errorMessage: null,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...preState,
        isAuthenticated: false,
        isAuthenticating: false,
        token: null,
        errorMessage: null,
      };
    case CHANGE_INFO_SUCCESS:
      return {
        ...preState,
        isAuthenticating: false,
        userInfo: action.data.payload,
        errorMessage: null,
      };
    case CHANGE_INFO_FAILED:
    case CHANGE_PASSWORD_FAILED:
      return {
        ...preState,
        errorMessage: action.data.message,
      };

    default:
      throw new Error();
  }
};

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  CHANGE_INFO_SUCCESS,
  CHANGE_INFO_FAILED,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED,
  UPDATE_STATE,
} from "../action/authentication-action";

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    throw new Error(error);
  }
};

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
    case CHANGE_PASSWORD_SUCCESS:
      storeData("authentication", {});
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
    case UPDATE_STATE:
      return {
        ...preState,
        ...action.data,
      };
    default:
      throw new Error();
  }
};

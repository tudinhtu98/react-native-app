import {
  apiChangeInfo,
  apiChangePassword,
  apiLogin,
} from "../core/services/authentication-service";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";
export const CHANGE_INFO_SUCCESS = "CHANGE_INFO_SUCCESS";
export const CHANGE_INFO_FAILED = "CHANGE_INFO_FAILED";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILED = "CHANGE_PASSWORD_FAILED";

const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, data };
};
const loginFailed = (data) => {
  return { type: LOGIN_FAILED, data };
};

const changeInfoSuccess = (data) => {
  return { type: CHANGE_INFO_SUCCESS, data };
};
const changeInfoFailed = (data) => {
  return { type: CHANGE_INFO_FAILED, data };
};
const changePasswordSuccess = (data) => {
  return { type: CHANGE_PASSWORD_SUCCESS, data };
};
const changePasswordFailed = (data) => {
  return { type: CHANGE_PASSWORD_FAILED, data };
};

export const login = (dispatch) => (email, password) => {
  dispatch({ type: LOGIN_REQUEST });
  apiLogin(email, password)
    .then((res) => {
      if (res.status === 200) {
        dispatch(loginSuccess(res.data));
      } else {
        dispatch(loginFailed(res.data));
      }
    })
    .catch((err) => {
      dispatch(loginFailed(err.response.data));
    });
};

export const changeInfo = (dispatch) => (name, phone, token) => {
  dispatch({ type: LOGIN_REQUEST });
  apiChangeInfo(name, phone, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch(changeInfoSuccess(res.data));
      } else {
        dispatch(changeInfoFailed(res.data));
      }
    })
    .catch((err) => {
      dispatch(changeInfoFailed(err.response.data));
    });
};
export const changePassword = (dispatch) => (
  oldPass,
  newPass,
  userId,
  token
) => {
  dispatch({ type: LOGIN_REQUEST });
  apiChangePassword(oldPass, newPass, userId, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch(changePasswordSuccess(res.data));
      } else {
        dispatch(changePasswordFailed(res.data));
      }
    })
    .catch((err) => {
      dispatch(changeInfoFailed(err.response.data));
    });
};

export const logout = (dispatch) => () => {
  dispatch({
    type: LOGOUT,
  });
};

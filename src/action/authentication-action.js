import { apiLogin } from "../core/services/authentication-service";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";

const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, data };
};
const loginFailed = (data) => {
  return { type: LOGIN_FAILED, data };
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

export const logout = (dispatch) => () => {
  dispatch({
    type: LOGOUT,
  });
};

import { apiGetAuthor } from "../core/services/author-service";

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILED = "GET_FAILED";

const getSuccess = (data) => {
  return { type: GET_SUCCESS, data };
};
const getFailed = (data) => {
  return { type: GET_FAILED, data };
};

export const getAuthor = (dispatch) => () => {
  dispatch({ type: GET_REQUEST });
  apiGetAuthor()
    .then((res) => {
      if (res.status === 200) {
        dispatch(getSuccess(res.data));
      } else {
        dispatch(getFailed(res.data));
      }
    })
    .catch((err) => {
      console.log("Author load fail", err.response.data);
      dispatch(getFailed(err.response.data));
    });
};

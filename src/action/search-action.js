import { apiSearch } from "../core/services/search-service";

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILED = "GET_FAILED";

const getSuccess = (data) => {
  return { type: GET_SUCCESS, data };
};
const getFailed = (data) => {
  return { type: GET_FAILED, data };
};

export const search = (dispatch) => (
  keyword,
  token,
  limit = 20,
  offset = 0
) => {
  dispatch({ type: GET_REQUEST });
  apiSearch(keyword, token, limit, offset)
    .then((res) => {
      if (res.status === 200) {
        dispatch(getSuccess(res.data));
      } else {
        dispatch(getFailed(res.data));
      }
    })
    .catch((err) => {
      console.log("Search load fail", err.response.data);
      dispatch(getFailed(err.response.data));
    });
};

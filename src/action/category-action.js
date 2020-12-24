import { apiGetCategory } from "../core/services/category-service";

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILED = "GET_FAILED";

const getSuccess = (data) => {
  return { type: GET_SUCCESS, data };
};
const getFailed = (data) => {
  return { type: GET_FAILED, data };
};

export const getCategory = (dispatch) => () => {
  dispatch({ type: GET_REQUEST });
  apiGetCategory()
    .then((res) => {
      if (res.status === 200) {
        dispatch(getSuccess(res.data));
      } else {
        dispatch(getFailed(res.data));
      }
    })
    .catch((err) => {
      console.log("Category load fail", err.response.data);
      dispatch(getFailed(err.response.data));
    });
};

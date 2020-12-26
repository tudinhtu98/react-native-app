import { apiGetTopSellCourse } from "../core/services/top-sell-course-service";

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILED = "GET_FAILED";

const getSuccess = (data) => {
  return { type: GET_SUCCESS, data };
};
const getFailed = (data) => {
  return { type: GET_FAILED, data };
};

export const getTopSellCourse = (dispatch) => (limit = 10, page = 1) => {
  dispatch({ type: GET_REQUEST });
  apiGetTopSellCourse(limit, page)
    .then((res) => {
      if (res.status === 200) {
        dispatch(getSuccess(res.data));
      } else {
        dispatch(getFailed(res.data));
      }
    })
    .catch((err) => {
      dispatch(getFailed(err.response.data));
    });
};
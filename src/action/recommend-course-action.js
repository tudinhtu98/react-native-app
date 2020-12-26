import { apiGetRecommendCourse } from "../core/services/recommend-course-service";

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILED = "GET_FAILED";

const getSuccess = (data) => {
  return { type: GET_SUCCESS, data };
};
const getFailed = (data) => {
  return { type: GET_FAILED, data };
};

export const getRecommendCourse = (dispatch) => (userId, limit, offset) => {
  dispatch({ type: GET_REQUEST });
  apiGetRecommendCourse(userId, limit, offset)
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

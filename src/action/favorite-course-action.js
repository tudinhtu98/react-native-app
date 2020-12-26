import { apiGetFavoriteCourse } from "../core/services/favorite-course-service";

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILED = "GET_FAILED";
export const DISLIKE_SUCCESS = "DISLIKE_SUCCESS";

const getSuccess = (data) => {
  return { type: GET_SUCCESS, data };
};
const getFailed = (data) => {
  return { type: GET_FAILED, data };
};

export const getFavoriteCourse = (dispatch) => (token) => {
  dispatch({ type: GET_REQUEST });
  apiGetFavoriteCourse(token)
    .then((res) => {
      if (res.status === 200) {
        dispatch(getSuccess(res.data));
      } else {
        dispatch(getFailed(res.data));
      }
    })
    .catch((err) => {
      console.log("Favorite course load fail", err.response.data);
      dispatch(getFailed(err.response.data));
    });
};

export const dislikeCourse = (dispatch) => (courseId) => {
  dispatch({ type: DISLIKE_SUCCESS, data: { courseId } });
};

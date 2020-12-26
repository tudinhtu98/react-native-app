import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILED,
  DISLIKE_SUCCESS,
} from "../action/favorite-course-action";

export const reducer = (preState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return { ...preState, isLoading: true };
    case GET_SUCCESS:
      return {
        ...preState,
        offset: preState.offset + action.data.payload.length,
        isLoaded: true,
        isLoading: false,
        data: action.data.payload,
        errorMessage: null,
      };
    case GET_FAILED:
      return {
        ...preState,
        isLoaded: false,
        isLoading: false,
        errorMessage: action.data.message,
      };
    case DISLIKE_SUCCESS:
      return {
        ...preState,
        data: preState.data.filter(
          (course) => course.id !== action.data.courseId
        ),
      };
    default:
      throw new Error();
  }
};

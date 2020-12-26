import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILED,
} from "../action/top-rate-course-action";

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
    default:
      throw new Error();
  }
};

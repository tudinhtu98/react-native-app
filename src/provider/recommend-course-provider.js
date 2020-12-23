import React, { useReducer } from "react";
import { getRecommendCourse } from "../action/recommend-course-action";
import { reducer } from "../reducer/recommend-course-reducer";

const RecommendCourseContext = React.createContext();

const initialState = {
  limit: 10,
  offset: 0,
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
  data: null,
};

const RecommendCourseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RecommendCourseContext.Provider
      value={{ state, getRecommendCourse: getRecommendCourse(dispatch) }}
    >
      {props.children}
    </RecommendCourseContext.Provider>
  );
};

export { RecommendCourseProvider, RecommendCourseContext };

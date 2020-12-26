import React, { useReducer } from "react";
import { getTopRateCourse } from "../action/top-rate-course-action";
import { reducer } from "../reducer/top-rate-course-reducer";

const TopRateCourseContext = React.createContext();

const initialState = {
  limit: 10,
  offset: 0,
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
  data: null,
};

const TopRateCourseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TopRateCourseContext.Provider
      value={{ state, getTopRateCourse: getTopRateCourse(dispatch) }}
    >
      {props.children}
    </TopRateCourseContext.Provider>
  );
};

export { TopRateCourseProvider, TopRateCourseContext };

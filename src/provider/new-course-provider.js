import React, { useReducer } from "react";
import { getNewCourse } from "../action/new-course-action";
import { reducer } from "../reducer/new-course-reducer";

const NewCourseContext = React.createContext();

const initialState = {
  limit: 10,
  offset: 0,
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
  data: null,
};

const NewCourseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NewCourseContext.Provider
      value={{ state, getNewCourse: getNewCourse(dispatch) }}
    >
      {props.children}
    </NewCourseContext.Provider>
  );
};

export { NewCourseProvider, NewCourseContext };

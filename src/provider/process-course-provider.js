import React, { useReducer } from "react";
import { getProcessCourse } from "../action/process-course-action";
import { reducer } from "../reducer/process-course-reducer";

const ProcessCourseContext = React.createContext();

const initialState = {
  limit: 10,
  offset: 0,
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
  data: null,
};

const ProcessCourseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProcessCourseContext.Provider
      value={{ state, getProcessCourse: getProcessCourse(dispatch) }}
    >
      {props.children}
    </ProcessCourseContext.Provider>
  );
};

export { ProcessCourseProvider, ProcessCourseContext };

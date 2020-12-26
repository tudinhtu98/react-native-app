import React, { useReducer } from "react";
import { getTopSellCourse } from "../action/top-sell-course-action";
import { reducer } from "../reducer/top-sell-course-reducer";

const TopSellCourseContext = React.createContext();

const initialState = {
  limit: 10,
  offset: 0,
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
  data: null,
};

const TopSellCourseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TopSellCourseContext.Provider
      value={{ state, getTopSellCourse: getTopSellCourse(dispatch) }}
    >
      {props.children}
    </TopSellCourseContext.Provider>
  );
};

export { TopSellCourseProvider, TopSellCourseContext };

import React, { useReducer } from "react";
import { getFavoriteCourse } from "../action/favorite-course-action";
import { reducer } from "../reducer/favorite-course-reducer";

const FavoriteCourseContext = React.createContext();

const initialState = {
  limit: 10,
  offset: 0,
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
  data: [],
};

const FavoriteCourseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FavoriteCourseContext.Provider
      value={{ state, getFavoriteCourse: getFavoriteCourse(dispatch) }}
    >
      {props.children}
    </FavoriteCourseContext.Provider>
  );
};

export { FavoriteCourseProvider, FavoriteCourseContext };

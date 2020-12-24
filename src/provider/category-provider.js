import React, { useReducer } from "react";
import { getCategory } from "../action/category-action";
import { reducer } from "../reducer/category-reducer";

const CategoryContext = React.createContext();

const initialState = {
  limit: 10,
  offset: 0,
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
  data: null,
};

const CategoryProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CategoryContext.Provider
      value={{ state, getCategory: getCategory(dispatch) }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };

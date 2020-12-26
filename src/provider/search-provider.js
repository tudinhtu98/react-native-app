import React, { useReducer } from "react";
import { search } from "../action/search-action";
import { reducer } from "../reducer/search-reducer";

const SearchContext = React.createContext();

const initialState = {
  limit: 10,
  offset: 0,
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
  data: null,
};

const SearchProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SearchContext.Provider value={{ state, search: search(dispatch) }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };

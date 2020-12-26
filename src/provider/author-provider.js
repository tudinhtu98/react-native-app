import React, { useReducer } from "react";
import { getAuthor } from "../action/author-action";
import { reducer } from "../reducer/author-reducer";

const AuthorContext = React.createContext();

const initialState = {
  limit: 10,
  offset: 0,
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
  data: null,
};

const AuthorProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthorContext.Provider
      value={{ state, getAuthor: getAuthor(dispatch) }}
    >
      {props.children}
    </AuthorContext.Provider>
  );
};

export { AuthorProvider, AuthorContext };

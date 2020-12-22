import React, { useReducer } from "react";
import { login, logout } from "../action/authentication-action";
import { reducer } from "../reducer/authentication-reducer";

const AuthenticationContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  userInfo: null,
  token: null,
  errorMessage: null,
};

const AuthenticationProvider = (props) => {
  // const [authentication, setAuthentication] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthenticationContext.Provider
      value={{ state, login: login(dispatch), logout: logout(dispatch) }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, AuthenticationContext };

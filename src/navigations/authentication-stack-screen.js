import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Login from "../components/Authentication/Login/login";
import ForgetPassword from "../components/Authentication/ForgetPassword/forget-password";
import Register from "../components/Authentication/Register/register";

const AuthenStack = createStackNavigator();
const AuthenticationStackScreen = (props) => {
  return (
    <AuthenStack.Navigator>
      <AuthenStack.Screen name="Login" component={Login} />
      <AuthenStack.Screen name="ForgetPassword" component={ForgetPassword} />
      <AuthenStack.Screen name="Register" component={Register} />
    </AuthenStack.Navigator>
  );
};

export default AuthenticationStackScreen;

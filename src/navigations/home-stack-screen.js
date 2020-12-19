import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRight from "./../globals/header-right";
import CourseDetail from "./../components/CourseDetail/course-detail";
import ListCourses from "./../components/Courses/ListCourses/list-courses";
import Home from "./../components/Main/Home/home";
import Profile from "../components/AccountManagement/Profile/profile";
import Settings from "../components/AccountManagement/Settings/settings";
import PathDetail from "../components/PathDetail/path-detail";
import ListPaths from "../components/Paths/ListPaths/list-paths";
import Login from "../components/Authentication/Login/login";
import ForgetPassword from "../components/Authentication/ForgetPassword/forget-password";
import Register from "../components/Authentication/Register/register";
import { ScreenKey } from "../globals/constants";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={ScreenKey.Home}
        component={Home}
        options={({ navigation, route }) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <HomeStack.Screen name={ScreenKey.Profile} component={Profile} />
      <HomeStack.Screen name={ScreenKey.Settings} component={Settings} />
      <HomeStack.Screen
        name={ScreenKey.ListCourses}
        component={ListCourses}
        options={{ title: "List Courses" }}
      />
      <HomeStack.Screen
        name={ScreenKey.CourseDetail}
        component={CourseDetail}
        options={{
          title: "Course Detail",
          // headerStyle: {
          //   backgroundColor: "#f4511e",
          // },
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
          // headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={ScreenKey.ListPaths}
        component={ListPaths}
        options={{ title: "List Paths" }}
      />
      <HomeStack.Screen name={ScreenKey.PathDetail} component={PathDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

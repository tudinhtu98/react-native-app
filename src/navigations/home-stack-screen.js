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

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Settings" component={Settings} />
      <HomeStack.Screen
        name="ListCourses"
        component={ListCourses}
        options={{ title: "List Courses" }}
      />
      <HomeStack.Screen
        name="CourseDetail"
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
        name="ListPaths"
        component={ListPaths}
        options={{ title: "List Paths" }}
      />
      <HomeStack.Screen name="PathDetail" component={PathDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

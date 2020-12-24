import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRight from "./../globals/header-right";
import CourseDetail from "./../components/CourseDetail/course-detail";
import ListCourses from "./../components/Courses/ListCourses/list-courses";
import Home from "./../components/Main/Home/home";
import PathDetail from "../components/PathDetail/path-detail";
import ListPaths from "../components/Paths/ListPaths/list-paths";
import { ScreenKey } from "../globals/constants";
import ListAllCourse from "../components/Courses/ListAllCourse/list-all-course";

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
      <HomeStack.Screen
        name={ScreenKey.ListAllCourse}
        component={ListAllCourse}
        options={{ title: "List all course" }}
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

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
import AuthorDetail from "../components/AuthorDetail/author-detail";

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
        options={({ route }) => ({ title: route.params.title })}
      />
      <HomeStack.Screen
        name={ScreenKey.CourseDetail}
        component={CourseDetail}
        options={({ route }) => ({ title: route.params.title })}
      />
      <HomeStack.Screen
        name={ScreenKey.ListPaths}
        component={ListPaths}
        options={({ route }) => ({ title: route.params.title })}
      />
      <HomeStack.Screen
        name={ScreenKey.PathDetail}
        component={PathDetail}
        options={({ route }) => ({ title: route.params.title })}
      />
      <HomeStack.Screen
        name={ScreenKey.AuthorDetail}
        component={AuthorDetail}
        options={({ route }) => ({ title: route.params.title })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

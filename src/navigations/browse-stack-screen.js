import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRight from "./../globals/header-right";
import CourseDetail from "./../components/CourseDetail/course-detail";
import Browse from "./../components/Main/Browse/browse";
import PathDetail from "./../components/PathDetail/path-detail";
import ListPaths from "../components/Paths/ListPaths/list-paths";
import { ScreenKey } from "../globals/constants";
import ListAllCourse from "../components/Courses/ListAllCourse/list-all-course";

const BrowseStack = createStackNavigator();

const BrowseStackScreen = () => {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name={ScreenKey.Browse}
        component={Browse}
        options={({ navigation }) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <BrowseStack.Screen
        name={ScreenKey.ListAllCourse}
        component={ListAllCourse}
        options={{ title: "List all course" }}
      />
      <BrowseStack.Screen
        name={ScreenKey.CourseDetail}
        component={CourseDetail}
        options={{
          title: "Course Detail",
          // headerShown: false,
        }}
      />
      <BrowseStack.Screen
        name={ScreenKey.ListPaths}
        component={ListPaths}
        options={{ title: "List Paths" }}
      />
      <BrowseStack.Screen
        name={ScreenKey.PathDetail}
        component={PathDetail}
        options={{ title: "Path Detail" }}
      />
    </BrowseStack.Navigator>
  );
};

export default BrowseStackScreen;

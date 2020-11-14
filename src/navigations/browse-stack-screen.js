import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRight from "./../globals/header-right";
import CourseDetail from "./../components/CourseDetail/course-detail";
import Browse from "./../components/Main/Browse/browse";
import Profile from "../components/AccountManagement/Profile/profile";
import PathDetail from "./../components/PathDetail/path-detail";
import Settings from "../components/AccountManagement/Settings/settings";
import ListPaths from "../components/Paths/ListPaths/list-paths";

const BrowseStack = createStackNavigator();

const BrowseStackScreen = () => {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name="Browse"
        component={Browse}
        options={({ navigation }) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <BrowseStack.Screen name="Profile" component={Profile} />
      <BrowseStack.Screen name="Settings" component={Settings} />
      <BrowseStack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{
          title: "Course Detail",
          // headerShown: false,
        }}
      />
      <BrowseStack.Screen
        name="ListPaths"
        component={ListPaths}
        options={{ title: "List Paths" }}
      />
      <BrowseStack.Screen
        name="PathDetail"
        component={PathDetail}
        options={{ title: "Path Detail" }}
      />
    </BrowseStack.Navigator>
  );
};

export default BrowseStackScreen;

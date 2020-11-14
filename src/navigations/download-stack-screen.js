import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRight from "./../globals/header-right";
import CourseDetail from "./../components/CourseDetail/course-detail";
import Download from "./../components/Main/Download/download";
import Profile from "../components/AccountManagement/Profile/profile";
import Settings from "../components/AccountManagement/Settings/settings";

const DownloadStack = createStackNavigator();

const DownloadStackScreen = () => {
  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name="Download"
        component={Download}
        options={({ navigation }) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <DownloadStack.Screen name="Profile" component={Profile} />
      <DownloadStack.Screen name="Settings" component={Settings} />
      <DownloadStack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{
          title: "Course Detail",
          // headerShown: false,
        }}
      />
    </DownloadStack.Navigator>
  );
};

export default DownloadStackScreen;

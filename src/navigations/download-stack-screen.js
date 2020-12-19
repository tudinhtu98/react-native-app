import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRight from "./../globals/header-right";
import CourseDetail from "./../components/CourseDetail/course-detail";
import Download from "./../components/Main/Download/download";
import Profile from "../components/AccountManagement/Profile/profile";
import Settings from "../components/AccountManagement/Settings/settings";
import { ScreenKey } from "../globals/constants";

const DownloadStack = createStackNavigator();

const DownloadStackScreen = () => {
  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name={ScreenKey.Download}
        component={Download}
        options={({ navigation }) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <DownloadStack.Screen name={ScreenKey.Profile} component={Profile} />
      <DownloadStack.Screen name={ScreenKey.Settings} component={Settings} />
      <DownloadStack.Screen
        name={ScreenKey.CourseDetail}
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

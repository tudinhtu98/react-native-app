import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeStackScreen from "./src/navigations/home-stack-screen";
import DownloadStackScreen from "./src/navigations/download-stack-screen";
import BrowseStackScreen from "./src/navigations/browse-stack-screen";
import SearchStackScreen from "./src/navigations/search-stack-screen";
import { MenuProvider } from "react-native-popup-menu";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/components/SplashScreen/splash-screen";
import Login from "./src/components/Authentication/Login/login";
import { ScreenKey } from "./src/globals/constants";
import Register from "./src/components/Authentication/Register/register";
import ForgetPassword from "./src/components/Authentication/ForgetPassword/forget-password";

const Tab = createBottomTabNavigator();
const MainNavigationStack = createStackNavigator();

export default function App() {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "Search") {
        return <MaterialIcons name={"search"} size={size} color={color} />;
      } else if (route.name === "Home") {
        iconName = "home-outline";
      } else if (route.name === "Download") {
        iconName = "download-outline";
      } else if (route.name === "Browse") {
        iconName = "grid";
      }
      return (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      );
    },
  });

  const MainTabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Download" component={DownloadStackScreen} />
        <Tab.Screen name="Browse" component={BrowseStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
    );
  };

  const MainNavigation = () => {
    return (
      <MainNavigationStack.Navigator>
        <MainNavigationStack.Screen
          name={ScreenKey.SplashScreen}
          component={SplashScreen}
          options={{ headerShown: false }} 
        />
        <MainNavigationStack.Screen
          name={ScreenKey.Login}
          component={Login}
          options={{ headerShown: false }} 
        />
        <MainNavigationStack.Screen
          name={ScreenKey.Register}
          component={Register}
          options={{ headerShown: false }} 
        />
        <MainNavigationStack.Screen
          name={ScreenKey.ForgetPassword}
          component={ForgetPassword}
          options={{ headerShown: false }} 
        />
        <MainNavigationStack.Screen
          name={ScreenKey.MainTab}
          component={MainTabNavigator}
          options={{ headerShown: false }} 
        />
      </MainNavigationStack.Navigator>
    );
  };

  return (
    <MenuProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

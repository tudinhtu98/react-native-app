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

const Tab = createBottomTabNavigator();

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

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Download" component={DownloadStackScreen} />
        <Tab.Screen name="Browse" component={BrowseStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

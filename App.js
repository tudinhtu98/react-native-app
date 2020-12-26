import React from "react";
import "react-native-gesture-handler";
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
import Profile from "./src/components/AccountManagement/Profile/profile";
import Settings from "./src/components/AccountManagement/Settings/settings";
import { ThemeProvider } from "./src/provider/theme-provider";
import { AuthenticationProvider } from "./src/provider/authentication-provider";
import { RecommendCourseProvider } from "./src/provider/recommend-course-provider";
import { ProcessCourseProvider } from "./src/provider/process-course-provider";
import { FavoriteCourseProvider } from "./src/provider/favorite-course-provider";
import { CategoryProvider } from "./src/provider/category-provider";
import { AuthorProvider } from "./src/provider/author-provider";
import { NewCourseProvider } from "./src/provider/new-course-provider";
import { TopSellCourseProvider } from "./src/provider/top-sell-course-provider";

const Tab = createBottomTabNavigator();
const MainNavigationStack = createStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    if (route.name === "Search") {
      return <MaterialIcons name={"search"} size={size} color={color} />;
    } else if (route.name === "Home") {
      iconName = "home-outline";
    } else if (route.name === "Download") {
      return <MaterialIcons name="favorite-border" size={size} color={color} />;
    } else if (route.name === "Browse") {
      iconName = "grid";
    }
    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  },
});

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen
        name="Download"
        component={DownloadStackScreen}
        options={{ title: "Favorite" }}
      />
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
        name={ScreenKey.Profile}
        component={Profile}
        // options={{ headerShown: false }}
      />
      <MainNavigationStack.Screen
        name={ScreenKey.Settings}
        component={Settings}
        // options={{ headerShown: false }}
      />
      <MainNavigationStack.Screen
        name={ScreenKey.MainTab}
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </MainNavigationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <CategoryProvider>
          <AuthorProvider>
            <TopSellCourseProvider>
              <NewCourseProvider>
                <FavoriteCourseProvider>
                  <ProcessCourseProvider>
                    <RecommendCourseProvider>
                      <MenuProvider>
                        <NavigationContainer>
                          <MainNavigation />
                        </NavigationContainer>
                      </MenuProvider>
                    </RecommendCourseProvider>
                  </ProcessCourseProvider>
                </FavoriteCourseProvider>
              </NewCourseProvider>
            </TopSellCourseProvider>
          </AuthorProvider>
        </CategoryProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

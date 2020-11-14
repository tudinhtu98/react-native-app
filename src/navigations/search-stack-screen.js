import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRight from "./../globals/header-right";
import Search from "./../components/Main/Search/search";
import Profile from "../components/AccountManagement/Profile/profile";
import Settings from "../components/AccountManagement/Settings/settings";
import SearchResultTab from "./search-result-tab";
import CourseDetail from "../components/CourseDetail/course-detail";
import PathDetail from "../components/PathDetail/path-detail";

const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={({ navigation }) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <SearchStack.Screen name="Profile" component={Profile} />
      <SearchStack.Screen name="Settings" component={Settings} />
      <SearchStack.Screen
        name="SearchResultTab"
        component={SearchResultTab}
        options={{
          title: "Search Result",
        }}
      />
      <SearchStack.Screen name="CourseDetail" component={CourseDetail} />
      <SearchStack.Screen name="PathDetail" component={PathDetail} />
    </SearchStack.Navigator>
  );
};
export default SearchStackScreen;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRight from "./../globals/header-right";
import Search from "./../components/Main/Search/search";
import SearchResultTab from "./search-result-tab";
import CourseDetail from "../components/CourseDetail/course-detail";
import PathDetail from "../components/PathDetail/path-detail";
import { ScreenKey } from "../globals/constants";
import { SearchProvider } from "../provider/search-provider";
import AuthorDetail from "../components/AuthorDetail/author-detail";

const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchProvider>
      <SearchStack.Navigator>
        <SearchStack.Screen
          name={ScreenKey.Search}
          component={Search}
          options={({ navigation }) => ({
            headerRight: () => <HeaderRight navigation={navigation} />,
          })}
        />
        <SearchStack.Screen
          name={ScreenKey.SearchResultTab}
          component={SearchResultTab}
          options={{
            title: "Search Result",
          }}
        />
        <SearchStack.Screen
          name={ScreenKey.CourseDetail}
          component={CourseDetail}
        />
        <SearchStack.Screen
          name={ScreenKey.PathDetail}
          component={PathDetail}
        />
        <SearchStack.Screen
          name={ScreenKey.AuthorDetail}
          component={AuthorDetail}
        />
      </SearchStack.Navigator>
    </SearchProvider>
  );
};
export default SearchStackScreen;

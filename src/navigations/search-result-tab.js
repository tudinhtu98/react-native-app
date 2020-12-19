import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResultAll from "../components/Main/Search/SearchResult/search-result-all";
import SearchResultCourses from "../components/Main/Search/SearchResult/SearchResultCourses/search-result-courses";
import SearchResultPaths from "../components/Main/Search/SearchResult/SearchResultPaths/search-result-paths";
import SearchResultAuthors from "../components/Main/Search/SearchResult/SearchResultAuthors/search-result-authors";
import { ScreenKey } from "../globals/constants";

const Tab = createMaterialTopTabNavigator();

const SearchResultTab = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenKey.SearchResultAll}
        component={SearchResultAll}
        options={{ title: "All" }}
      />
      <Tab.Screen
        name={ScreenKey.SearchResultCourses}
        component={SearchResultCourses}
        options={{ title: "Courses" }}
      />
      <Tab.Screen
        name={ScreenKey.SearchResultPaths}
        component={SearchResultPaths}
        options={{ title: "Paths" }}
      />
      <Tab.Screen
        name={ScreenKey.SearchResultAuthors}
        component={SearchResultAuthors}
        options={{ title: "Authors" }}
      />
    </Tab.Navigator>
  );
};

export default SearchResultTab;

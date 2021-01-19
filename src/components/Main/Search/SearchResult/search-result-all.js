import React, { useContext, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LogBox,
  ActivityIndicator,
} from "react-native";
import { ScreenKey } from "../../../../globals/constants";
import { stylesGlo } from "../../../../globals/styles";
import { SearchContext } from "../../../../provider/search-provider";
import { ThemeContext } from "../../../../provider/theme-provider";
import ListAuthors from "../../../Authors/ListAuthors/list-authors";
import ListCourses from "../../../Courses/ListCourses/list-courses";
import ListPaths from "../../../Paths/ListPaths/list-paths";

const SearchResultAll = (props) => {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(SearchContext);

  const RenderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      />
    );
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: theme.background }}>
      {state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <ScrollView>
          {/* Courses Result */}
          <View style={styles.viewRow}>
            <Text style={{ color: theme.foreground }}>Courses</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(ScreenKey.SearchResultCourses);
              }}
            >
              <Text
                style={{ ...stylesGlo.textSmall, color: theme.foreground }}
              >{`${state.data.courses.total} results >`}</Text>
            </TouchableOpacity>
          </View>
          <RenderSeparator />
          <ListCourses
            navigation={props.navigation}
            courses={state.data.courses.data}
          />
          {/* Paths Result */}
          {/* <View style={styles.viewRow}>
        <Text style={{ color: theme.foreground }}>Paths</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenKey.SearchResultPaths);
          }}
        >
          <Text
            style={{...stylesGlo.textSmall, color: theme.foreground}}
          >{`${countResult.countResultPaths} results >`}</Text>
        </TouchableOpacity>
      </View>
      <RenderSeparator />
      <ListPaths navigation={props.navigation} /> */}
          {/* Authors Result */}
          <View style={styles.viewRow}>
            <Text style={{ color: theme.foreground }}>Authors</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(ScreenKey.SearchResultAuthors);
              }}
            >
              <Text
                style={{ ...stylesGlo.textSmall, color: theme.foreground }}
              >{`${state.data.instructors.total} results >`}</Text>
            </TouchableOpacity>
          </View>
          <RenderSeparator />
          <ListAuthors
            navigation={props.navigation}
            authors={state.data.instructors.data}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default SearchResultAll;

const styles = StyleSheet.create({
  viewRow: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

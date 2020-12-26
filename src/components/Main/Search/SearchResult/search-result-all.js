import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LogBox,
  ActivityIndicator,
} from "react-native";
import { useContext } from "react/cjs/react.development";
import { ScreenKey } from "../../../../globals/constants";
import { stylesGlo } from "../../../../globals/styles";
import { SearchContext } from "../../../../provider/search-provider";
import ListAuthors from "../../../Authors/ListAuthors/list-authors";
import ListCourses from "../../../Courses/ListCourses/list-courses";
import ListPaths from "../../../Paths/ListPaths/list-paths";

const SearchResultAll = (props) => {
  const { state } = useContext(SearchContext);
  const countResult = {
    countResultCourses: 12,
    countResultPaths: 4,
    countResultAuthors: 10,
  };

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
    <View>
      {state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <ScrollView>
          {/* Courses Result */}
          <View style={styles.viewRow}>
            <Text>Courses</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(ScreenKey.SearchResultCourses);
              }}
            >
              <Text
                style={stylesGlo.textSmall}
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
        <Text>Paths</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenKey.SearchResultPaths);
          }}
        >
          <Text
            style={stylesGlo.textSmall}
          >{`${countResult.countResultPaths} results >`}</Text>
        </TouchableOpacity>
      </View>
      <RenderSeparator />
      <ListPaths navigation={props.navigation} /> */}
          {/* Authors Result */}
          <View style={styles.viewRow}>
            <Text>Authors</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(ScreenKey.SearchResultAuthors);
              }}
            >
              <Text
                style={stylesGlo.textSmall}
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

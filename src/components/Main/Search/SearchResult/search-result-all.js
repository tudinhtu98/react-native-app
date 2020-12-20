import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from "react-native";
import { ScreenKey } from "../../../../globals/constants";
import { stylesGlo } from "../../../../globals/styles";
import ListAuthors from "../../../Authors/ListAuthors/list-authors";
import ListCourses from "../../../Courses/ListCourses/list-courses";
import ListPaths from "../../../Paths/ListPaths/list-paths";

const SearchResultAll = (props) => {
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
          >{`${countResult.countResultCourses} Results >`}</Text>
        </TouchableOpacity>
      </View>
      <RenderSeparator />
      <ListCourses navigation={props.navigation} />
      {/* Paths Result */}
      <View style={styles.viewRow}>
        <Text>Paths</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenKey.SearchResultPaths);
          }}
        >
          <Text
            style={stylesGlo.textSmall}
          >{`${countResult.countResultPaths} Results >`}</Text>
        </TouchableOpacity>
      </View>
      <RenderSeparator />
      <ListPaths navigation={props.navigation} />
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
          >{`${countResult.countResultAuthors} Results >`}</Text>
        </TouchableOpacity>
      </View>
      <RenderSeparator />
      <ListAuthors navigation={props.navigation} />
    </ScrollView>
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

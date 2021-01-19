import React, { useContext, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { FavoriteCourseContext } from "../../../provider/favorite-course-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import ListCourses from "../../Courses/ListCourses/list-courses";
import ListFavoriteCourses from "../../Courses/ListFavoriteCourses/list-favorite-courses";

const Download = (props) => {
  const { state } = useContext(AuthenticationContext);
  const { theme } = useContext(ThemeContext);
  const favoriteCourseContext = useContext(FavoriteCourseContext);

  useEffect(() => {
    favoriteCourseContext.getFavoriteCourse(state.token);
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: theme.background }}>
      {favoriteCourseContext.state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View>
          <View style={styles.view}>
            <Text
              style={{ color: theme.foreground }}
            >{`${favoriteCourseContext.state.data.length} courses`}</Text>
          </View>
          <ListFavoriteCourses
            navigation={props.navigation}
            courses={favoriteCourseContext.state.data}
          />
        </View>
      )}
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  textRemove: {
    color: "blue",
  },
});

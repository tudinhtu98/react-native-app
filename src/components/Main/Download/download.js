import React, { useContext } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import { FavoriteCourseContext } from "../../../provider/favorite-course-provider";
import ListCourses from "../../Courses/ListCourses/list-courses";

const Download = (props) => {
  const { state } = useContext(FavoriteCourseContext);

  return (
    <View>
      <View style={styles.view}>
        <Text>{`${state.data.length} courses`}</Text>
      </View>
      <ListCourses navigation={props.navigation} courses={state.data} />
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

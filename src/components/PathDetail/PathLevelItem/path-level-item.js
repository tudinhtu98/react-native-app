import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ListCourses from "../../Courses/ListCourses/list-courses";

const PathLevelItem = (props) => {
  return (
    <View>
      <Text style={styles.textTitle}>{props.level.title}</Text>
      <View style={styles.viewSeparate} />
      <ListCourses navigation={props.navigation} />
    </View>
  );
};

export default PathLevelItem;

const styles = StyleSheet.create({
  textTitle: {
    margin: 10,
  },
  viewSeparate: {
    height: 1,
    backgroundColor: "#CED0CE",
    marginLeft: "2%",
    marginRight: "2%",
  },
});

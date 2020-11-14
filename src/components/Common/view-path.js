import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewPath = (props) => {
  return (
    <View style={styles.view}>
      <Text style={{ flexWrap: "wrap" }}>{props.item.title}</Text>
      <Text style={styles.darkText}>{`${props.item.countCourses} courses`}</Text>
    </View>
  );
};

export default ViewPath;

const styles = StyleSheet.create({
  view: {
    margin: 5,
  },
  darkText: {
    color: "darkgray",
  },
});

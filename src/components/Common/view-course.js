import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewCourse = (props) => {
  return (
    <View style={styles.view}>
      <Text style={{ flexWrap: "wrap" }}>{props.item.title}</Text>
      <Text style={styles.darkText}>{props.item.author}</Text>
      <Text
        style={styles.darkText}
      >{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
    </View>
  );
};

export default ViewCourse;

const styles = StyleSheet.create({
  view: {
    margin: 5,
  },
  darkText: {
    color: "darkgray",
  },
});

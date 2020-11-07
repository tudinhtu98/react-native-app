import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewCourse = (props) => {
  return (
    <View style={{ margin: 5 }}>
      <Text>{props.item.title}</Text>
      <Text style={styles.darkText}>{props.item.author}</Text>
      <Text
        style={styles.darkText}
      >{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
    </View>
  );
};

export default ViewCourse;

const styles = StyleSheet.create({
  darkText: {
    color: "darkgray",
  },
});

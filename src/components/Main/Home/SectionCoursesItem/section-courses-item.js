import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ViewCourse from "../../../Common/view-course";

const SectionCoursesItem = (props) => {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: "https://i.imgur.com/JOJdL5G.jpeg" }}
        style={styles.image}
      />
      <ViewCourse item={props.item} />
    </View>
  );
};

export default SectionCoursesItem;

const styles = StyleSheet.create({
  item: {
    margin: 5,
    width: 200,
    height: 200,
    backgroundColor: "lightgray",
  },
  image: {
    height: 100,
  },
});

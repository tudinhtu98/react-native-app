import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { stylesGlo } from "../../../../globals/styles";
import ViewCourse from "../../../Common/view-course";
import ViewDotsVertical from "../../../Common/view-dots-vertical";

const SectionCoursesItem = (props) => {
  return (
    <TouchableOpacity
      style={[styles.item, stylesGlo.shadow]}
      onPress={() => {
        props.navigation.navigate("CourseDetail", {
          item: props.item,
        });
      }}
    >
      <View>
        <Image
          source={{ uri: "https://i.imgur.com/JOJdL5G.jpeg" }}
          style={styles.image}
        />
        <View style={styles.dots}>
          <ViewDotsVertical
            onPress={() => alert("Pressed Dots!")}
            color="white"
          />
        </View>
      </View>

      <ViewCourse item={props.item} />
    </TouchableOpacity>
  );
};

export default SectionCoursesItem;

const styles = StyleSheet.create({
  item: {
    margin: 10,
    width: 200,
    height: 200,
    backgroundColor: "lightgray",
  },
  image: {
    height: 100,
  },
  dots: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import ViewCourse from "../../../Common/view-course";
import ViewDotsVertical from "../../../Common/view-dots-vertical";

const SectionCoursesItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <Image
          source={{ uri: "https://i.imgur.com/JOJdL5G.jpeg" }}
          style={styles.image}
        />
        <ViewDotsVertical onPress={() => alert("Pressed Dots! haha")} />
      </View>

      <ViewCourse item={props.item} />
    </TouchableOpacity>
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

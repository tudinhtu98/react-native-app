import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { stylesGlo } from "../../../../globals/styles";
import ViewCourse from "../../../Common/view-course";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

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
          <TouchableWithoutFeedback onPress={() => alert("press on dots")}>
            <Icon name="dots-vertical" size={25} color="white" />
          </TouchableWithoutFeedback>
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

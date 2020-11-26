import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Share,
  Text,
} from "react-native";
import ViewCourse from "../../Common/view-course";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ListCoursesItem = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate("CourseDetail", {
            item: props.item,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: "https://i.imgur.com/rPcR1KK.jpeg" }}
        />
        <ViewCourse item={props.item} />
      </TouchableOpacity>
      <View style={styles.dots}>
        <TouchableWithoutFeedback onPress={() => alert("press on dots")}>
          <Icon name="dots-vertical" size={25} color="black" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default ListCoursesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    margin: 10,
    height: 80,
  },
  image: {
    width: 100,
    height: 80,
  },
  dots: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    padding: 5,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});

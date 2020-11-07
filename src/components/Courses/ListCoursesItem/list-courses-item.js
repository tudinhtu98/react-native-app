import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Share,
  Text,
} from "react-native";
import ViewCourse from "../../Common/view-course";

const ListCoursesItem = (props) => {
  const handlePressOption = () => {
    Alert.alert("Thông báo", "Bạn đã chọn tuỳ chọn", [
      {
        text: "Huỷ",
        style: "cancel",
        onPress: () => {
          console.log("Press Huỷ");
        },
      },
      {
        text: "Share",
        style: "default",
        onPress: () => {
          Share.share({ message: "Hahaha share được rồi" });
        },
      },
    ]);
  };
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        console.log("Touch on course item");
      }}
    >
      <Image
        style={styles.image}
        source={{ uri: "https://i.imgur.com/rPcR1KK.jpeg" }}
      />
      <ViewCourse item={props.item} />
      <TouchableOpacity onPress={handlePressOption}>
        <Text>...</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ListCoursesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    margin: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
});

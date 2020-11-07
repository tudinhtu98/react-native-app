import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ViewCourse from "../../../Common/view-course";
import ViewPath from "../../../Common/view-path";

const SectionPathsItem = (props) => {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: props.item.image }}
        style={styles.image}
      />
      <ViewPath item={props.item} />
    </View>
  );
};

export default SectionPathsItem;

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

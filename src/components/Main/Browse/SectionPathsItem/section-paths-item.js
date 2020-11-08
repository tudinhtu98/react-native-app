import React from "react";
import {  StyleSheet, Image, TouchableOpacity } from "react-native";
import ViewPath from "../../../Common/view-path";

const SectionPathsItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        source={{ uri: props.item.image }}
        style={styles.image}
      />
      <ViewPath item={props.item} />
    </TouchableOpacity>
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

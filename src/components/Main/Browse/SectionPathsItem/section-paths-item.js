import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import { stylesGlo } from "../../../../globals/styles";
import ViewPath from "../../../Common/view-path";

const SectionPathsItem = (props) => {
  return (
    <TouchableOpacity
      style={[styles.item, stylesGlo.shadow]}
      onPress={() => {
        props.onPressSectionPathsItem(props.item);
      }}
    >
      {/* <Image source={{ uri: props.item.image }} style={styles.image} /> */}
      <ViewPath item={props.item} />
    </TouchableOpacity>
  );
};

export default SectionPathsItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    // height: 50,
    borderRadius: 25,
    backgroundColor: "lightgray",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
});

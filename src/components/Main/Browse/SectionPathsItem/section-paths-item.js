import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScreenKey } from "../../../../globals/constants";
import { stylesGlo } from "../../../../globals/styles";
import ViewPath from "../../../Common/view-path";

const SectionPathsItem = (props) => {
  return (
    <TouchableOpacity
      style={[styles.item, stylesGlo.shadow]}
      onPress={() => {
        props.navigation.navigate(ScreenKey.PathDetail, {
          item: props.item,
        });
      }}
    >
      <Image source={{ uri: props.item.image }} style={styles.image} />
      <ViewPath item={props.item} />
    </TouchableOpacity>
  );
};

export default SectionPathsItem;

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
});

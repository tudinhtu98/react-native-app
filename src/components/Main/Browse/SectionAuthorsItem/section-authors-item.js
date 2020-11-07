import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const SectionAuthorsItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: props.item.image }} style={styles.image} />
      <Text styles={styles.text}>{props.item.title}</Text>
    </TouchableOpacity>
  );
};

export default SectionAuthorsItem;

const styles = StyleSheet.create({
  text: {
    flexWrap: "wrap",
  },
  item: {
    margin: 5,
    width: 100,
    height: 200,
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 70,
  },
});

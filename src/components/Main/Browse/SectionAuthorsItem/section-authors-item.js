import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ScreenKey } from "../../../../globals/constants";
import { stylesGlo } from "../../../../globals/styles";

const SectionAuthorsItem = (props) => {
  const onPressAuthorItem = () => {
    props.navigation.navigate(ScreenKey.AuthorDetail, {
      item: props.item,
    });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={onPressAuthorItem}>
      <Image
        source={{ uri: props.item.avatar || props.item["user.avatar"] }}
        style={[styles.image, stylesGlo.shadow]}
      />
      <Text styles={styles.text}>
        {props.item.name || props.item["user.name"]}
      </Text>
    </TouchableOpacity>
  );
};

export default SectionAuthorsItem;

const styles = StyleSheet.create({
  text: {
    flexWrap: "wrap",
    textAlign: "center",
  },
  item: {
    margin: 5,
    width: 110,
    height: 150,
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 70,
  },
});

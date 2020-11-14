import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { stylesGlo } from "../../../globals/styles";

const ListPathsItem = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate("PathDetail", {
            item: props.item,
          });
        }}
      >
        <Image style={styles.image} source={{ uri: props.item.image }} />
        <View style={styles.viewPath}>
          <Text>{props.item.title}</Text>
          <Text
            style={stylesGlo.textSmall}
          >{`${props.item.countCourses} courses`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListPathsItem;

const styles = StyleSheet.create({
  viewPath: {
    marginHorizontal: 5,
  },
  item: {
    flexDirection: "row",
    margin: 10,
    height: 80,
  },
  image: {
    width: 100,
    height: 80,
  },
});

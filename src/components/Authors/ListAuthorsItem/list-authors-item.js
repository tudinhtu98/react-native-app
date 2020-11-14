import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { stylesGlo } from "../../../globals/styles";

const ListAuthorsItem = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        // onPress={() => {
        //   props.navigation.navigate("PathDetail", {
        //     item: props.item,
        //   });
        // }}
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

export default ListAuthorsItem;

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
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { stylesGlo } from "../../globals/styles";

const ViewCourse = (props) => {
  return (
    <View style={styles.view}>
      <Text style={{ flexWrap: "wrap" }}>{props.item.title}</Text>
      <Text style={stylesGlo.textSmall}>{props.item.author}</Text>
      <Text
        style={stylesGlo.textSmall}
      >{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
    </View>
  );
};

export default ViewCourse;

const styles = StyleSheet.create({
  view: {
    marginHorizontal: 5,
  },
  darkText: {
    color: "darkgray",
  },
});

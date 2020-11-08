import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ViewDotsVertical = (props) => {
  return (
    <View style={styles.styleView}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <Icon name="dots-vertical" size={25} color="white" />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ViewDotsVertical;

const styles = StyleSheet.create({
  styleView: {
    position: "absolute",
    padding: 5,
    width: 35,
    top: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

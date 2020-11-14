import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ViewDotsVertical = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Icon name="dots-vertical" size={25} color={props.color} />
    </TouchableWithoutFeedback>
  );
};

export default ViewDotsVertical;

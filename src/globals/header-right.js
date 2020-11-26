import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const HeaderRight = (props) => {
  
  return (
    <View style={[styles.view, styles.center]}>
      <TouchableOpacity
        style={styles.center}
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      >
        <Image
          style={styles.imageAvatar}
          source={require("../../assets/icon-account.png")}
        />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => alert("press on dots")}>
        <Icon name="dots-vertical" size={25}/>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  view: {
    margin: 5,
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageAvatar: {
    width: 25,
    height: 25,
    borderRadius: 15,
    marginRight: 15,
  },
});

import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import ViewDotsVertical from "../components/Common/view-dots-vertical";

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
      <ViewDotsVertical onPress={() => alert("press on dots")} />
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

import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const HeaderRight = (props) => {
  const hanleSelectSettings = () => {
    props.navigation.navigate("Settings");
  }
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
      <Menu>
        <MenuTrigger>
          <Icon name="dots-vertical" size={25} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={hanleSelectSettings}>
            <Text style={styles.textMenuOption}>Settings</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
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
  textMenuOption: {
    margin: 10
  }
});

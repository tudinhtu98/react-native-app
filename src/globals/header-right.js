import React, { useContext } from "react";
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
import { ScreenKey } from "./constants";
import { AuthenticationContext } from "../provider/authentication-provider";

const HeaderRight = (props) => {
  const { state } = useContext(AuthenticationContext);
  const hanleSelectSettings = () => {
    props.navigation.navigate(ScreenKey.Settings);
  };
  return (
    <View style={[styles.view, styles.center]}>
      <TouchableOpacity
        style={styles.center}
        onPress={() => {
          props.navigation.navigate(ScreenKey.Profile);
        }}
      >
        <Image
          style={styles.imageAvatar}
          source={{ uri: state.userInfo.avatar }}
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
    margin: 10,
  },
});

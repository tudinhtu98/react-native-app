import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Profile from "../Profile/profile";
import { stylesGlo } from "../../../globals/styles";
import { ScreenKey } from "../../../globals/constants";
import { StackActions } from "@react-navigation/native";


const Settings = (props) => {
  const handleSignOut = () => {
    props.navigation.dispatch(StackActions.replace(ScreenKey.Login));
  }
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(ScreenKey.Profile);
        }}
      >
        <Profile />
      </TouchableOpacity>
      <View></View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={stylesGlo.textBlue}>SIGNOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
  },
});

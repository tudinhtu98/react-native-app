import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Profile from "../Profile/profile";
import { stylesGlo } from "../../../globals/styles";


const Settings = (props) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      >
        <Profile />
      </TouchableOpacity>
      <View></View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={stylesGlo.textBlue}>SIGN OUT</Text>
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

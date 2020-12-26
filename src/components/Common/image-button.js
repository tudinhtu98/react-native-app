import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { stylesGlo } from "../../globals/styles";

const ImageButton = (props) => {
  return (
    <ImageBackground
      style={[styles.button, stylesGlo.shadow]}
      source={require("../../../assets/mushroom.jpeg")}
    >
      <TouchableOpacity style={styles.touch} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  button: {
    height: 150,
    marginHorizontal: 10,
    marginTop: 10,
  },
  touch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { stylesGlo } from "../../globals/styles";

const ImageButtonItem = (props) => {
  return (
    <ImageBackground
      style={[styles.button, stylesGlo.shadow]}
      source={{ uri: "https://i.imgur.com/oO25B7I.jpeg" }}
    >
      <TouchableOpacity style={styles.touch} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ImageButtonItem;

const styles = StyleSheet.create({
  button: {
    height: 75,
    marginTop: 10,
    marginLeft: 10,
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

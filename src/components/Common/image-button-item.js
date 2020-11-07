import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const ImageButtonItem = (props) => {
  return (
    <ImageBackground
      style={styles.button}
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
    margin: 5,
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
import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const Login = (props) => {
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        placeholder="Username (or Email)"
        autoCompleteType="username"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity style={[styles.button, styles.buttonLogin]}>
        <Text style={styles.textWhite}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("ForgetPassword");
        }}
      >
        <Text style={styles.textBlue}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
          props.navigation.navigate("Register");
        }}>
        <Text style={styles.textBlue}>REGISTER FREE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    margin: 30,
  },
  textInput: {
    height: 55,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 5,
  },
  buttonLogin: {
    backgroundColor: "gray",
  },
  textBlue: {
    color: "blue",
  },
  textWhite: {
    color: "white",
    fontWeight: "bold",
  },
});

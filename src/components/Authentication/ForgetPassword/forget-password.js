import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const ForgetPassword = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.textIntro}>
        Enter your email address and we'll send you a link to reset your
        password
      </Text>
      <Text>Email</Text>
      <TextInput
        style={styles.textInput}
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      ></TextInput>
      <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
        <Text style={styles.textWhite}>Send email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonGray]}
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Text style={styles.textWhite}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  view: {
    margin: 30,
  },
  textIntro: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  textInput: {
    height: 55,
    marginTop: 5,
    marginBottom: 20,
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
  buttonBlue: {
    backgroundColor: "blue",
  },
  buttonGray: {
    backgroundColor: "gray",
  },
  textWhite: {
    color: "white",
  },
});

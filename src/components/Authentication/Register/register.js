import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  CheckBox,
} from "react-native";

const Register = (props) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.view}>
      <Text>Email</Text>
      <TextInput
        style={styles.textInput}
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      ></TextInput>
      <Text>Password</Text>
      <TextInput style={styles.textInput} secureTextEntry={true}></TextInput>
      <Text>Confirmed Password</Text>
      <TextInput style={styles.textInput} secureTextEntry={true}></TextInput>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          By activating this benefit, you agree to terms of user and privacy
          policy.
        </Text>
      </View>
      <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
        <Text>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  view: {
    margin: 30,
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
  buttonRegister: {
    backgroundColor: "gray",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

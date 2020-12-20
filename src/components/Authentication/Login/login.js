import { StackActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { login } from "../../../core/services/authentication-service";
import { ScreenKey } from "../../../globals/constants";

const Login = (props) => {
  const [textEmail, setTextEmail] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [status, setStatus] = useState(null);

  const renderLoginStatus = (status) => {
    if (!status) {
      return <View />;
    } else if (status.status === 200) {
      props.navigation.dispatch(StackActions.replace(ScreenKey.MainTab));
      return <Text>Login successed!</Text>;
    } else {
      return <Text>{status.errorString}</Text>;
    }
  };

  return (
    <View style={styles.view}>
      <View style={styles.viewImage}>
        <Image
          style={styles.image}
          source={require("./../../../../assets/splash-logo.png")}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        autoCompleteType="email"
        onChangeText={(textEmail) => setTextEmail(textEmail)}
        defaultValue={textEmail}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(textPassword) => setTextPassword(textPassword)}
        defaultValue={textPassword}
      ></TextInput>
      {renderLoginStatus(status)}
      <TouchableOpacity
        style={[styles.button, styles.buttonLogin]}
        onPress={() => {
          setStatus(login(textEmail, textPassword));
        }}
      >
        <Text style={styles.textWhite}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate(ScreenKey.ForgetPassword);
        }}
      >
        <Text style={styles.textBlue}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate(ScreenKey.Register);
        }}
      >
        <Text style={styles.textBlue}>REGISTER FREE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 30,
  },
  viewImage: {
    justifyContent: "center",
    alignItems: "center",
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
  image: {
    margin: 50,
    width: "60%",
    height: undefined,
    aspectRatio: 1.2,
  },
});

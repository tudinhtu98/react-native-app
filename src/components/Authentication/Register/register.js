import React, { useContext, useEffect, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  CheckBox,
  ActivityIndicator,
  Alert,
} from "react-native";
import {
  apiRegister,
  apiSendActiveEmail,
} from "../../../core/services/register-service";
import { stylesGlo } from "../../../globals/styles";
import { LanguageContext } from "../../../provider/language-provider";

const renderRegisterStatus = (registerStatus) => {
  if (registerStatus) {
    if (registerStatus.status === 200) {
      return (
        <Text style={stylesGlo.textSuccess}>
          Registration completed successfully
        </Text>
      );
    } else {
      return (
        <Text style={stylesGlo.textDanger}>{registerStatus.data.message}</Text>
      );
    }
  }
  return <View />;
};

const Register = (props) => {
  const { language } = useContext(LanguageContext);
  const [isRegistering, setRegistering] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onPressRegister = () => {
    setRegistering(true);
    apiRegister(email, phone, password)
      .then((res) => {
        setRegisterStatus({
          status: res.status,
          data: res.data,
        });
        if (res.status === 200) {
          setRegisterSuccess(true);
          Alert.alert(
            "Registration successful",
            "Please confirm your email to activate your account"
          );
        }
      })
      .catch((err) => {
        setRegisterStatus({
          status: err.response.status,
          data: err.response.data,
        });
      })
      .finally(() => {
        setRegistering(false);
      });
  };

  useEffect(() => {
    if (registerSuccess) {
      apiSendActiveEmail(email);
      setEmail("");
      setPhone("");
      setPassword("");
    }
  }, [registerSuccess]);

  return (
    <View style={styles.view}>
      <Text>Email</Text>
      <TextInput
        style={styles.textInput}
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <Text>{language.phone}</Text>
      <TextInput
        style={styles.textInput}
        autoCompleteType="tel"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
        autoCapitalize="none"
        onChangeText={(text) => setPhone(text)}
      ></TextInput>
      <Text>{language.password}</Text>
      <TextInput
        style={styles.textInput}
        textContentType="newPassword"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      {/* <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          By activating this benefit, you agree to terms of user and privacy
          policy.
        </Text>
      </View> */}
      {isRegistering ? (
        <ActivityIndicator color="blue" />
      ) : (
        renderRegisterStatus(registerStatus)
      )}
      <TouchableOpacity
        style={[styles.button, styles.buttonRegister]}
        onPress={onPressRegister}
      >
        <Text style={styles.textWhite}>{language.register}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  view: {
    marginTop: 50,
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
  textWhite: {
    color: "white",
    fontWeight: "bold",
  },
});

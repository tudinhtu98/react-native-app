import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { apiForgetPassSendEmail } from "../../../core/services/forget-password-service";
import { stylesGlo } from "../../../globals/styles";

const renderSendEmail = (status) => {
  if (status) {
    if (status.status === 200) {
      return <Text style={stylesGlo.textSuccess}>{status.message}</Text>;
    } else {
      return <Text style={stylesGlo.textDanger}>{status.message}</Text>;
    }
  }
  return <View />;
};

const ForgetPassword = (props) => {
  const [isSending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");

  const onPressSendEmail = () => {
    setSending(true);
    apiForgetPassSendEmail(email)
      .then((res) => {
        setStatus({ status: res.status, message: res.data.message });
      })
      .catch((err) => {
        setStatus({
          status: err.response.status,
          message: err.response.data.message,
        });
      })
      .finally(() => {
        setSending(false);
      });
  };

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
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      {isSending ? <ActivityIndicator color="blue" /> : renderSendEmail(status)}
      <TouchableOpacity
        style={[styles.button, styles.buttonBlue]}
        onPress={onPressSendEmail}
      >
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
    backgroundColor: "deepskyblue",
  },
  buttonGray: {
    backgroundColor: "gray",
  },
  textWhite: {
    color: "white",
  },
});

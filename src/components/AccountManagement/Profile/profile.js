import { StackActions } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Modal,
  TouchableHighlight,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScreenKey } from "../../../globals/constants";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { LanguageContext } from "../../../provider/language-provider";
import { ThemeContext } from "../../../provider/theme-provider";

const Profile = (props) => {
  const { state, changeInfo, changePassword } = useContext(
    AuthenticationContext
  );
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [isEditing, setEditing] = useState(false);
  const [isEditingPass, setEditingPass] = useState(false);
  const [nameUpdate, setNameUpdate] = useState("");
  const [phoneUpdate, setPhoneUpdate] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const email = state.userInfo ? state.userInfo.email : "";
  const name = state.userInfo && state.userInfo.name ? state.userInfo.name : "";
  const phone =
    state.userInfo && state.userInfo.phone ? state.userInfo.phone : "";

  const onPressUpdateProfile = () => {
    setNameUpdate(name);
    setPhoneUpdate(phone);
    setEditing(true);
  };

  const onPressSaveProfile = () => {
    changeInfo(nameUpdate, phoneUpdate, state.token);
    setEditing(!isEditing);
  };

  const onPressCancelProfile = () => {
    setNameUpdate(name);
    setPhoneUpdate(phone);
    setEditing(!isEditing);
  };
  const onPressChangePass = () => {
    setEditingPass(true);
  };

  const onPressSavePass = () => {
    changePassword(oldPass, newPass, state.userInfo.id, state.token);
    setEditingPass(!isEditingPass);
  };

  const onPressCancelChangePass = () => {
    setEditingPass(!isEditingPass);
  };

  useEffect(() => {
    if (!state.isAuthenticated) {
      props.navigation.dispatch(StackActions.popToTop());
      props.navigation.dispatch(StackActions.replace(ScreenKey.Login));
      Alert.alert(
        "Info",
        "Change password successfull. Please login again with new password!"
      );
    }
  }, [state.isAuthenticated]);

  // useEffect(() => {
  //   if (state.errorMessage) {
  //     Alert.alert("Info", state.errorMessage);
  //   }
  // }, [state.isAuthenticating]);

  return (
    <View
      style={{ padding: 10, height: "100%", backgroundColor: theme.background }}
    >
      <View style={styles.view}>
        <Image style={styles.avatar} source={{ uri: state.userInfo.avatar }} />
        <Text style={{ ...styles.textLarge, color: theme.foreground }}>
          {name}
        </Text>
      </View>
      <View>
        <Text style={{ color: theme.foreground }}>Email</Text>
        <Text style={{ ...styles.textMedium, color: theme.foreground }}>
          {email}
        </Text>
        <Text style={{ color: theme.foreground }}>{language.phone}</Text>
        <Text style={{ ...styles.textMedium, color: theme.foreground }}>
          {phone}
        </Text>

        <TouchableOpacity
          style={[styles.button, styles.buttonProfile]}
          onPress={onPressUpdateProfile}
        >
          <Text style={styles.textStyle}>{language.updateProfile}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonPassword]}
          onPress={onPressChangePass}
        >
          <Text style={styles.textStyle}>{language.changePassword}</Text>
        </TouchableOpacity>
      </View>
      {/* Update infomation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEditing}
        onRequestClose={() => {
          onPressCancelProfile();
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={{ ...styles.modalView, backgroundColor: theme.background }}
          >
            <Text style={{ ...styles.modalText, color: theme.foreground }}>
              {language.name}
            </Text>
            <TextInput
              style={{
                ...styles.textInput,
                color: theme.foreground,
                borderColor: theme.foreground,
              }}
              value={nameUpdate}
              onChangeText={(name) => setNameUpdate(name)}
            />
            <Text style={{ ...styles.modalText, color: theme.foreground }}>
              {language.phone}
            </Text>
            <TextInput
              style={{
                ...styles.textInput,
                color: theme.foreground,
                borderColor: theme.foreground,
              }}
              value={phoneUpdate}
              autoCompleteType="tel"
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              onChangeText={(phone) => setPhoneUpdate(phone)}
            />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "darkgreen" }}
              onPress={onPressSaveProfile}
            >
              <Text style={styles.textStyle}>{language.save}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={onPressCancelProfile}
            >
              <Text style={styles.textStyle}>{language.cancel}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      {/* Change password */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEditingPass}
        onRequestClose={() => {
          onPressCancelChangePass();
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={{ ...styles.modalView, backgroundColor: theme.background }}
          >
            <Text style={{ ...styles.modalText, color: theme.foreground }}>
              {language.oldPassword}
            </Text>
            <TextInput
              style={{
                ...styles.textInput,
                color: theme.foreground,
                borderColor: theme.foreground,
              }}
              autoCapitalize="none"
              onChangeText={(oldPass) => setOldPass(oldPass)}
            />
            <Text style={{ ...styles.modalText, color: theme.foreground }}>
              {language.newPassword}
            </Text>
            <TextInput
              style={{
                ...styles.textInput,
                color: theme.foreground,
                borderColor: theme.foreground,
              }}
              autoCapitalize="none"
              onChangeText={(newPass) => setNewPass(newPass)}
            />

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "darkgreen" }}
              onPress={onPressSavePass}
            >
              <Text style={styles.textStyle}>{language.save}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={onPressCancelChangePass}
            >
              <Text style={styles.textStyle}>{language.cancel}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    margin: 10,
  },
  username: {
    marginLeft: 10,
    fontSize: 25,
  },
  textMedium: {
    marginVertical: 5,
    padding: 10,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
  },
  textLarge: {
    marginVertical: 5,
    padding: 10,
    fontSize: 30,
  },
  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 20,
  },
  buttonProfile: {
    backgroundColor: "#2196F3",
  },
  buttonPassword: {
    backgroundColor: "orange",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 20,
    padding: 10,
  },
});

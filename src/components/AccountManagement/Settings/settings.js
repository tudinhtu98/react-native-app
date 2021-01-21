import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import { ScreenKey } from "../../../globals/constants";
import { StackActions } from "@react-navigation/native";
import { ThemeContext } from "../../../provider/theme-provider";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageContext } from "../../../provider/language-provider";

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    throw new Error(error);
  }
};

const Settings = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const authContext = useContext(AuthenticationContext);
  const name =
    authContext.state.userInfo && authContext.state.userInfo.name
      ? authContext.state.userInfo.name
      : "";

  const handleSignOut = () => {
    authContext.logout();
    props.navigation.dispatch(StackActions.popToTop());
    props.navigation.dispatch(StackActions.replace(ScreenKey.Login));
  };

  const onPressAppVersion = () => {
    Alert.alert(language.appVersion, "1.0.0");
  };

  useEffect(() => {
    storeData("themeName", theme.name);
  }, [theme]);
  useEffect(() => {
    storeData("languageName", language.languageName);
  }, [language]);

  return (
    <View
      style={{
        ...styles.view,
        backgroundColor: theme.background,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenKey.Profile);
          }}
        >
          <View style={styles.viewProfile}>
            <Image
              style={styles.avatar}
              source={{ uri: authContext.state.userInfo.avatar }}
            />
            <Text style={{ ...styles.textLarge, color: theme.foreground }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
        <View></View>
        <View>
          <TouchableOpacity
            style={{ ...styles.button, borderColor: theme.foreground }}
            onPress={toggleTheme}
          >
            <Text style={{ color: theme.foreground }}>
              {language.changeTheme}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{ ...styles.button, borderColor: theme.foreground }}
            onPress={toggleLanguage}
          >
            <Text style={{ color: theme.foreground }}>
              {language.changeLanguage}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{ ...styles.button, borderColor: theme.foreground }}
            onPress={onPressAppVersion}
          >
            <Text style={{ color: theme.foreground }}>
              {language.appVersion}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <TouchableOpacity
            style={{ ...styles.button, borderColor: theme.foreground }}
            onPress={handleSignOut}
          >
            <Text style={{ color: theme.foreground }}>{language.logout}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  view: {
    padding: 10,
    height: "100%",
  },
  viewProfile: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    margin: 10,
  },
  textLarge: {
    marginVertical: 5,
    padding: 10,
    fontSize: 30,
  },
});

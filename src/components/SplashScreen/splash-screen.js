import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { ScreenKey } from "../../globals/constants";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiGetMe } from "../../core/services/authentication-service";
import { ThemeContext } from "../../provider/theme-provider";
import { AuthenticationContext } from "../../provider/authentication-provider";
import { LanguageContext } from "../../provider/language-provider";

const retrieveData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    throw new Error(error);
  }
};

const checkValidToken = async () => {
  const data = await retrieveData("authentication");
  if (data && data.token) {
    return apiGetMe(data.token)
      .then((res) => {
        if (res.status == 200) {
          return [true, data];
        }
        return [false, data];
      })
      .catch(() => [false, data]);
  }
  return [false, data];
};

const SplashScreen = (props) => {
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage } = useContext(LanguageContext);
  const { updateState } = useContext(AuthenticationContext);
  const [state, setState] = useState({
    isChecking: true,
    isChecked: false,
    data: {},
  });

  useEffect(() => {
    const checkDataStorage = async () => {
      const [check, data] = await checkValidToken();
      const languageName = await retrieveData("languageName");
      const themeName = await retrieveData("themeName");
      if (languageName == "vietnamese") {
        toggleLanguage();
      }
      setState({ isChecking: false, isChecked: check, data });
      if (themeName == "dark") {
        toggleTheme();
      }
    };
    checkDataStorage();
  }, []);

  useEffect(() => {
    if (!state.isChecking) {
      if (state.isChecked) {
        updateState(state.data);
        props.navigation.dispatch(StackActions.replace(ScreenKey.MainTab));
      } else {
        props.navigation.dispatch(StackActions.replace(ScreenKey.Login));
      }
    }
  }, [state.isChecking]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./../../../assets/splash-logo.png")}
      />
      <ActivityIndicator style={{ marginTop: 50 }} size="large" color="green" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: undefined,
    aspectRatio: 1.2,
  },
  textLoading: {
    marginTop: 30,
    fontWeight: "bold",
  },
});

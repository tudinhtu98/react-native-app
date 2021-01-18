import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { ScreenKey } from "../../globals/constants";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiGetMe } from "../../core/services/authentication-service";
import { AuthenticationContext } from "../../provider/authentication-provider";

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
    return apiGetMe(data.token).then((res) => {
      if (res.status == 200) {
        return [true, data];
      }
      return [false, data];
    }).catch(() => [false, data]);
  }
  return [false, data];
};

export default class SplashScreen extends Component {
  static contextType = AuthenticationContext;
  constructor(props) {
    super(props);
    this.state = {
      isChecking: true,
      isChecked: false,
      data: {},
    };
  }

  async componentDidMount() {
    const [check, data] = await checkValidToken();
    this.setState({ isChecking: false, isChecked: check, data });
  }

  componentDidUpdate() {
    if (!this.state.isChecking) {
      if (this.state.isChecked) {
        this.context.updateState(this.state.data);
        this.props.navigation.dispatch(StackActions.replace(ScreenKey.MainTab));
      } else {
        this.props.navigation.dispatch(StackActions.replace(ScreenKey.Login));
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./../../../assets/splash-logo.png")}
        />
        <ActivityIndicator
          style={{ marginTop: 50 }}
          size="large"
          color="green"
        />
      </View>
    );
  }
}

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

import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScreenKey } from "../../globals/constants";
import { StackActions } from "@react-navigation/native";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const newLoadingValue = this.state.loading + 1;
      this.setState({ loading: newLoadingValue });
    }, 10);
  }

  componentDidUpdate() {
    if (this.state.loading >= 99) {
      clearInterval(this.timer);
      this.props.navigation.dispatch(StackActions.replace(ScreenKey.Login));
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./../../../assets/splash-logo.png")}
        />
        <Text style={styles.textLoading}>
          Loading... {`${this.state.loading}`}
        </Text>
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
    fontSize: 20,
    fontWeight: "bold",
  },
});

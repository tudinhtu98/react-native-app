import React from "react";
import { StyleSheet, Dimensions, Platform, View } from "react-native";
import WebView from "react-native-webview";

const { width, height } = Dimensions.get("window");

const VideoPlayer = (props) => {
  return (
    <View style={styles.video}>
      <WebView
        style={{ marginTop: Platform.OS == "ios" ? 20 : 0 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: props.uriVideo }}
      />
    </View>
  );
};

export default VideoPlayer;

var styles = StyleSheet.create({
  video: {
    width: width,
    height: (height * 3) / 10,
  },
});

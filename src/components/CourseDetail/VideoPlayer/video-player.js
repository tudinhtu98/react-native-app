import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
import { Video } from "expo-av";
import YouTube from "react-native-youtube";
import WebView from "react-native-webview";

const { width, height } = Dimensions.get("window");

const VideoPlayer = (props) => {
  console.log("props.uriVideo", props.uriVideo);
  return (
    // <WebView
    //   style={{ flex: 1 }}
    //   javaScriptEnabled={true}
    //   source={{
    //     uri: props.uriVideo + "?rel=0&autoplay=0&showinfo=0&controls=0",
    //   }}
    // />
    // <WebView
    //   style={{ marginTop: Platform.OS == "ios" ? 20 : 0 }}
    //   javaScriptEnabled={true}
    //   domStorageEnabled={true}
    //   source={{
    //     uri: props.uriVideo,
    //   }}
    // />
    // <YouTube
    //   // uriVideo="https://youtube.com/embed/BhbETPFyuaY"
    //   videoId="BhbETPFyuaY" // The YouTube video ID
    //   play // control playback of video with true/false
    //   fullscreen // control whether the video should play in fullscreen or inline
    //   loop // control whether the video should loop when ended
    //   onReady={(e) => this.setState({ isReady: true })}
    //   onChangeState={(e) => this.setState({ status: e.state })}
    //   onChangeQuality={(e) => this.setState({ quality: e.quality })}
    //   onError={(e) => this.setState({ error: e.error })}
    //   style={{ alignSelf: "stretch", height: 300 }}
    // />
    <Video
      source={{
        uri: props.uriVideo,
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay={false}
      isLooping={false}
      useNativeControls
      style={styles.video}
    />
  );
};

export default VideoPlayer;

var styles = StyleSheet.create({
  video: {
    width: width,
    height: (height * 3) / 10,
  },
});

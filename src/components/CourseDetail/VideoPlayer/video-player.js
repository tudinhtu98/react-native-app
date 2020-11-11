import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");

const VideoPlayer = (props) => {
  return (
    <Video
      source={{
        uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
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

import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Profile = (props) => {
  return (
    <View>
      <View style={styles.view}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={styles.username}>Nguyễn Văn A</Text>
      </View>
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
  },
  username: {
    marginLeft: 10,
    fontSize: 25,
  },
});

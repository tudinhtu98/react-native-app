import React, { useContext } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AuthenticationContext } from "../../../provider/authentication-provider";

const Profile = (props) => {
  const { authentication } = useContext(AuthenticationContext);
  return (
    <View style={styles.view}>
      <Image
        style={styles.avatar}
        source={require("../../../../assets/icon-account.png")}
      />
      <Text style={styles.username}>
        {authentication ? authentication.user.fullname : "Full name"}
      </Text>
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

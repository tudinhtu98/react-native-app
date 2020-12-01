import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import SectionPaths from "../Browse/SectionPaths/section-paths";
import SectionCourses from "./SectionCourses/section-courses";

const Home = (props) => {
  const navigation = props.navigation;
  const [isSignedIn, setSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      // Prevent default behavior
      e.preventDefault();

      console.log("Default behavior prevented");
      navigation.goBack();
    });

    return unsubscribe;
  }, [navigation]);

  const handlePressLogin = () => {
    props.navigation.navigate("Login", {
      setSignIn: setSignIn,
    });
  };

  return (
    <ScrollView style={styles.view}>
      {!isSignedIn && (
        <View style={{ height: 150 }}>
          <Text style={styles.textLogin}>Log in to skill up today</Text>
          <TouchableOpacity 
            style={styles.buttonLogin}
            onPress={handlePressLogin}
          >
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
      <SectionCourses title="Continue learning" navigation={navigation} />
      <SectionCourses title="Software Development" navigation={navigation} />
      <SectionPaths title="My Paths" navigation={navigation} />
      <SectionCourses title="Bookmarks" navigation={navigation} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    margin: 0,
  },
  textLogin: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonLogin: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 5,
    backgroundColor: "deepskyblue",
    color: "white",
  },
});

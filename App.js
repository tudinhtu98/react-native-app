import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListCourses from "./src/components/Courses/ListCourses/list-courses";
import Browse from "./src/components/Main/Browse/browse";
import Home from "./src/components/Main/Home/home";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <ListCourses /> */}
      <Browse />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

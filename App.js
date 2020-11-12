import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ForgetPassword from "./src/components/Authentication/ForgetPassword/forget-password";
import Login from "./src/components/Authentication/Login/login";
import Register from "./src/components/Authentication/Register/register";
import CourseDetail from "./src/components/CourseDetail/course-detail";
import VideoPlayer from "./src/components/CourseDetail/VideoPlayer/video-player";
import ListCourses from "./src/components/Courses/ListCourses/list-courses";
import Browse from "./src/components/Main/Browse/browse";
import Download from "./src/components/Main/Download/download";
import Home from "./src/components/Main/Home/home";
import Search from "./src/components/Main/Search/search";
import Profile from "./src/components/AccountManagement/Profile/profile";
import PathDetail from "./src/components/PathDetail/path-detail";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <ListCourses /> */}
      {/* <Browse /> */}
      {/* <Download /> */}
      {/* <Search /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgetPassword /> */}
      {/* <CourseDetail /> */}
      {/* <Profile /> */}
      <PathDetail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

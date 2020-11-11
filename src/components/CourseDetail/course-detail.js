import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import ListSessions from "./ListSessions/list-sessions";
import SectionIntro from "./SectionIntro/section-intro";
import VideoPlayer from "./VideoPlayer/video-player";

const CourseDetail = (props) => {
  const courseInfo = {
    title: "Angular Fundamentals",
    author: "Joe Eames",
    level: "Intermediate",
    released: "thg 2 01 2019",
    duration: "9,6h",
    introduction:
      "Angular has become 123456789 123456789 123456789 123456789 123456789",
  };
  return (
    <View>
      <VideoPlayer />
      <ScrollView>
        <SectionIntro courseInfo={courseInfo}/>
        <ListSessions />
      </ScrollView>
    </View>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  listSession: {},
});

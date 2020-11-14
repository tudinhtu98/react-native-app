import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import ListSessions from "./ListSessions/list-sessions";
import SectionIntro from "./SectionIntro/section-intro";
import VideoPlayer from "./VideoPlayer/video-player";

const CourseDetail = (props) => {
  props.navigation.setOptions({ title: props.route.params.item.title });
  return (
    <View>
      <VideoPlayer />
      <ScrollView>
        <SectionIntro courseInfo={props.route.params.item} />
        <ListSessions />
      </ScrollView>
    </View>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  listSession: {},
});

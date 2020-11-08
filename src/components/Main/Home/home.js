import React from "react";
import { ScrollView, View } from "react-native";
import SectionCourses from "./SectionCourses/section-courses";

const Home = (props) => {
  return (
    <ScrollView>
      <View style={{ height: 200 }}></View>
      <SectionCourses title="Continue learning" />
      <SectionCourses title="Paths" />
      <SectionCourses title="Channels" />
      <SectionCourses title="Bookmarks" />
    </ScrollView>
  );
};

export default Home;

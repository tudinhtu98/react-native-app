import React, { useContext, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { RecommendCourseContext } from "../../../provider/recommend-course-provider";
import SectionPaths from "../Browse/SectionPaths/section-paths";
import SectionCourses from "./SectionCourses/section-courses";

const Home = (props) => {
  const navigation = props.navigation;
  const recommendCourseContext = useContext(RecommendCourseContext);
  const { state } = useContext(AuthenticationContext);

  useEffect(() => {
    recommendCourseContext.getRecommendCourse(state.userInfo.id, 5, 0);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      // Prevent default behavior
      e.preventDefault();

      console.log("Default behavior prevented");
      navigation.goBack();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.view}>
      <SectionCourses
        title="Continue learning"
        navigation={navigation}
        data={recommendCourseContext.state.data}
      />
      <SectionCourses
        title="Software Development"
        navigation={navigation}
        data={recommendCourseContext.state.data}
      />
      <SectionPaths title="My Paths" navigation={navigation} />
      <SectionCourses
        title="Bookmarks"
        navigation={navigation}
        data={recommendCourseContext.state.data}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    margin: 0,
  },
});

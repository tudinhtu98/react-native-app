import React, { useContext, useEffect } from "react";
import { ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { RecommendCourseContext } from "../../../provider/recommend-course-provider";
// import { ProcessCourseContext } from "../../../provider/process-course-provider";
import SectionPaths from "../Browse/SectionPaths/section-paths";
import SectionCourses from "./SectionCourses/section-courses";
import { CategoryContext } from "../../../provider/category-provider";
import { NewCourseContext } from "../../../provider/new-course-provider";
import { TopSellCourseContext } from "../../../provider/top-sell-course-provider";
import { TopRateCourseContext } from "../../../provider/top-rate-course-provider";
import { ProcessCourseContext } from "../../../provider/process-course-provider";
import SectionProcessCourses from "./SectionProcessCourses/section-process-courses";

const Home = (props) => {
  const recommendCourseContext = useContext(RecommendCourseContext);
  const processCourseContext = useContext(ProcessCourseContext);
  const newCourseContext = useContext(NewCourseContext);
  const topSellCourseContext = useContext(TopSellCourseContext);
  const topRateCourseContext = useContext(TopRateCourseContext);
  const categoryContext = useContext(CategoryContext);

  const { state } = useContext(AuthenticationContext);
  const navigation = props.navigation;

  useEffect(() => {
    processCourseContext.getProcessCourse(state.token);
    recommendCourseContext.getRecommendCourse(state.userInfo.id, 10, 0);
    newCourseContext.getNewCourse(10, 1);
    categoryContext.getCategory();
    topSellCourseContext.getTopSellCourse(10, 1);
    topRateCourseContext.getTopRateCourse(10, 1);
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
      {processCourseContext.state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <SectionProcessCourses
          title="Continue learning"
          navigation={navigation}
          data={processCourseContext.state.data}
        />
      )}
      {recommendCourseContext.state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <SectionCourses
          title="Recommended For You"
          navigation={navigation}
          data={recommendCourseContext.state.data}
        />
      )}
      {topRateCourseContext.state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <SectionCourses
          title="Top Rate"
          navigation={navigation}
          data={topRateCourseContext.state.data}
        />
      )}
      {topSellCourseContext.state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <SectionCourses
          title="Top Sell"
          navigation={navigation}
          data={topSellCourseContext.state.data}
        />
      )}
      {categoryContext.state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <SectionPaths
          title="Category"
          navigation={navigation}
          data={categoryContext.state.data}
        />
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    margin: 0,
  },
});

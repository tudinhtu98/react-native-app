import React, { useContext, useEffect } from "react";
import { ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { RecommendCourseContext } from "../../../provider/recommend-course-provider";
import { ProcessCourseContext } from "../../../provider/process-course-provider";
import SectionPaths from "../Browse/SectionPaths/section-paths";
import SectionCourses from "./SectionCourses/section-courses";
import { FavoriteCourseContext } from "../../../provider/favorite-course-provider";
import { CategoryContext } from "../../../provider/category-provider";

const Home = (props) => {
  const recommendCourseContext = useContext(RecommendCourseContext);
  const processCourseContext = useContext(ProcessCourseContext);
  const favoriteCourseContext = useContext(FavoriteCourseContext);
  const categoryContext = useContext(CategoryContext);

  const { state } = useContext(AuthenticationContext);
  const navigation = props.navigation;

  useEffect(() => {
    processCourseContext.getProcessCourse(state.token);
    favoriteCourseContext.getFavoriteCourse(state.token);
    recommendCourseContext.getRecommendCourse(state.userInfo.id, 5, 0);
    categoryContext.getCategory();
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
        <SectionCourses
          title="Continue learning"
          navigation={navigation}
          data={processCourseContext.state.data}
        />
      )}
      {recommendCourseContext.state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <SectionCourses
          title="Software Development"
          navigation={navigation}
          data={recommendCourseContext.state.data}
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

      {favoriteCourseContext.state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <SectionCourses
          title="Bookmarks"
          navigation={navigation}
          data={favoriteCourseContext.state.data}
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

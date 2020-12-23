import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ScreenKey } from "../../../../globals/constants";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";

const SectionCourses = (props) => {
  const courses = props.data || [];

  const onPressSectionCoursesItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, { item });
  };

  const onPressSeeAll = () => {
    props.navigation.navigate(ScreenKey.ListCourses, {
      data: courses,
    });
  };

  const renderListItems = (courses) => {
    return courses.map((item) => (
      <SectionCoursesItem
        key={item.id.toString()}
        item={item}
        navigation={props.navigation}
        onPressSectionCoursesItem={onPressSectionCoursesItem}
      />
    ));
  };
  return (
    <View>
      <View style={styles.titleView}>
        <Text>{props.title}</Text>
        <TouchableOpacity onPress={onPressSeeAll}>
          <Text>{`See all >`}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>{renderListItems(courses)}</ScrollView>
    </View>
  );
};

export default SectionCourses;

const styles = StyleSheet.create({
  titleView: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

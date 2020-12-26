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
import { textGlo } from "../../../../globals/constants";
import { stylesGlo } from "../../../../globals/styles";

const SectionCourses = (props) => {
  const courses = props.data || [];

  const onPressSectionCoursesItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {
      item,
      title: item.title,
    });
  };

  const onPressSeeAll = () => {
    props.navigation.navigate(ScreenKey.ListAllCourse, {
      data: courses,
      title: props.title,
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
      <View>
        <View style={styles.titleView}>
          <Text>{props.title}</Text>
          {courses.length > 0 && (
            <TouchableOpacity onPress={onPressSeeAll}>
              <Text>{`See all >`}</Text>
            </TouchableOpacity>
          )}
        </View>
        {courses.length == 0 ? (
          <Text style={stylesGlo.emptyCourses}>{textGlo.emptyCourse}</Text>
        ) : (
          <ScrollView horizontal={true}>{renderListItems(courses)}</ScrollView>
        )}
      </View>
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

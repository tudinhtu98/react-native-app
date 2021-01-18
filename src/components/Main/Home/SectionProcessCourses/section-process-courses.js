import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ScreenKey } from "../../../../globals/constants";
import SectionProcessCoursesItem from "../SectionProcessCoursesItem/section-process-courses-item";
import { textGlo } from "../../../../globals/constants";
import { stylesGlo } from "../../../../globals/styles";

const SectionProcessCourses = (props) => {
  const courses = props.data || [];

  const onPressSectionProcessCoursesItem = (item) => {
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
      <SectionProcessCoursesItem
        key={item.id.toString()}
        item={item}
        navigation={props.navigation}
        onPressSectionProcessCoursesItem={onPressSectionProcessCoursesItem}
      />
    ));
  };
  return (
    <View>
      <View>
        <View style={styles.titleView}>
          <Text>{props.title}</Text>
          {/* {courses.length > 0 && (
            <TouchableOpacity onPress={onPressSeeAll}>
              <Text>{`See all >`}</Text>
            </TouchableOpacity>
          )} */}
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

export default SectionProcessCourses;

const styles = StyleSheet.create({
  titleView: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

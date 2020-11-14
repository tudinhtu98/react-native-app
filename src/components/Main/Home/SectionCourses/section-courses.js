import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";

const SectionCourses = (props) => {
  const courses = [
    {
      id: 1,
      title: "React Native React Native React Native React Native",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
    },
    {
      id: 2,
      title: "Flutter",
      author: "Hai Nguyen",
      level: "Beginner",
      released: "Nov 2020",
      duration: "29 hours",
    },
    {
      id: 3,
      title: "IOS",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
    },
  ];

  const renderListItems = (courses) => {
    return courses.map((item) => <SectionCoursesItem item={item} navigation={props.navigation}/>);
  };
  return (
    <View>
      <View style={styles.titleView}>
        <Text>{props.title}</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("ListCourses", {
              item: props.item,
            });
          }}
        >
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

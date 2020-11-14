import React from "react";
import { FlatList, View } from "react-native";
import ListCoursesItem from "../ListCoursesItem/list-courses-item";

const ListCourses = (props) => {
  const courses = [
    {
      id: 1,
      title: "Khoá học blabla 123456789 123456789 123456789 123456789",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
      introduction:
      "Angular has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 2,
      title: "Flutter",
      author: "Hai Nguyen",
      level: "Beginner",
      released: "Nov 2020",
      duration: "29 hours",
      introduction:
      "Flutter has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 3,
      title: "IOS",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
      introduction:
      "IOS has become 123456789 123456789 123456789 123456789 123456789",
    },
  ];

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <ListCoursesItem navigation={props.navigation} item={item} />
        )}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default ListCourses;

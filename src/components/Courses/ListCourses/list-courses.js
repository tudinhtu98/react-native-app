import React from "react";
import { FlatList, View } from "react-native";
import ListCoursesItem from "../ListCoursesItem/list-courses-item";

const ListCourses = (props) => {
  const courses = [
    {
      id: 1,
      title: "Angular",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
      image: "https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png",
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
      image: "https://www.kindpng.com/picc/m/355-3557482_flutter-logo-png-transparent-png.png",
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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/1200px-IOS_logo.svg.png",
      introduction:
      "IOS has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 4,
      title: "Angular 2",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
      image: "https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png",
      introduction:
      "Angular has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 5,
      title: "Flutter 2",
      author: "Hai Nguyen",
      level: "Beginner",
      released: "Nov 2020",
      duration: "29 hours",
      image: "https://www.kindpng.com/picc/m/355-3557482_flutter-logo-png-transparent-png.png",
      introduction:
      "Flutter has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 6,
      title: "IOS 2",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/1200px-IOS_logo.svg.png",
      introduction:
      "IOS has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 7,
      title: "Angular 3",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
      image: "https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png",
      introduction:
      "Angular has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 8,
      title: "Flutter 3",
      author: "Hai Nguyen",
      level: "Beginner",
      released: "Nov 2020",
      duration: "29 hours",
      image: "https://www.kindpng.com/picc/m/355-3557482_flutter-logo-png-transparent-png.png",
      introduction:
      "Flutter has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 9,
      title: "IOS 3",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/1200px-IOS_logo.svg.png",
      introduction:
      "IOS has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 10,
      title: "Angular 4",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
      image: "https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png",
      introduction:
      "Angular has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 11,
      title: "Flutter 4",
      author: "Hai Nguyen",
      level: "Beginner",
      released: "Nov 2020",
      duration: "29 hours",
      image: "https://www.kindpng.com/picc/m/355-3557482_flutter-logo-png-transparent-png.png",
      introduction:
      "Flutter has become 123456789 123456789 123456789 123456789 123456789",
    },
    {
      id: 12,
      title: "IOS 4",
      author: "Tu Dinh Tu",
      level: "Advance",
      released: "Nov 2020",
      duration: "30 hours",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/1200px-IOS_logo.svg.png",
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

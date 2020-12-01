import React from "react";
import { View, Text, ScrollView } from "react-native";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";

const SectionAuthors = (props) => {
  const authors = [
    {
      id: 1,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Deborah Karata",
      countCourses: 3,
    },
    {
      id: 2,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Scott Allen",
      countCourses: 2,
    },
    {
      id: 3,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Joe Eames",
      countCourses: 1,
    },
    {
      id: 4,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Deborah Karata",
      countCourses: 5,
    },
    {
      id: 5,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Scott Allen",
      countCourses: 1,
    },
    {
      id: 6,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Deborah Karata 2",
      countCourses: 3,
    },
    {
      id: 7,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Scott Allen 2",
      countCourses: 2,
    },
    {
      id: 8,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Joe Eames 2",
      countCourses: 1,
    },
    {
      id: 9,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Deborah Karata 2",
      countCourses: 5,
    },
    {
      id: 10,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Scott Allen 2",
      countCourses: 1,
    },
  ];

  const renderListItems = (authors) => {
    return authors.map((item) => <SectionAuthorsItem item={item} />);
  };
  return (
    <View>
      <View>
        <Text style={{ margin: 5 }}>{props.title}</Text>
      </View>
      <ScrollView horizontal={true}>{renderListItems(authors)}</ScrollView>
    </View>
  );
};

export default SectionAuthors;

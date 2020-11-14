import React from "react";
import { View, Text, ScrollView } from "react-native";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";

const SectionAuthors = (props) => {
  const paths = [
    {
      id: 1,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Deborah Karata",
    },
    {
      id: 2,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Scott Allen",
    },
    {
      id: 3,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Joe Eames",
    },
    {
      id: 4,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Deborah Karata",
    },
    {
      id: 5,
      image: "https://i.imgur.com/Jvh1OQm.jpg",
      title: "Scott Allen",
    },
  ];

  const renderListItems = (paths) => {
    return paths.map((item) => <SectionAuthorsItem item={item} />);
  };
  return (
    <View>
      <View>
        <Text style={{ margin: 5 }}>{props.title}</Text>
      </View>
      <ScrollView horizontal={true}>{renderListItems(paths)}</ScrollView>
    </View>
  );
};

export default SectionAuthors;

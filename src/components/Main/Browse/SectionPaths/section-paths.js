import React from "react";
import { View, Text, ScrollView } from "react-native";
import SectionPathsItem from "../SectionPathsItem/section-paths-item";

const SectionPaths = (props) => {
  const paths = [
    {
      id: 1,
      image: "https://i.imgur.com/JOJdL5G.jpeg",
      title: "Styling the Web with Bootstrap",
      countCourses: 4
    },
    {
      id: 2,
      image: "https://i.imgur.com/JOJdL5G.jpeg",
      title: "Failover Conf 2020",
      countCourses: 13
    },
    {
      id: 3,
      image: "https://i.imgur.com/JOJdL5G.jpeg",
      title: "Pluralsight LIVE 2020",
      countCourses: 109
    },
  ];

  const renderListItems = (paths) => {
    return paths.map((item) => <SectionPathsItem item={item} />);
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

export default SectionPaths;

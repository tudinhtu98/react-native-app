import React from "react";
import { View, Text, ScrollView } from "react-native";
import SectionPathsItem from "../SectionPathsItem/section-paths-item";

const SectionPaths = (props) => {
  const paths = [
    {
      id: 1,
      image: "https://i.imgur.com/JOJdL5G.jpeg",
      title: "Styling the Web with Bootstrap",
      countCourses: 4,
      duration: "56 hours",
      introduction:
        "Styling the Web with Bootstrap. Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789.",
      progress: 2,
    },
    {
      id: 2,
      image: "https://i.imgur.com/JOJdL5G.jpeg",
      title: "Failover Conf 2020",
      countCourses: 13,
      duration: "56 hours",
      introduction:
        "Failover Conf 2020. Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789.",
      progress: 0,
    },
    {
      id: 3,
      image: "https://i.imgur.com/JOJdL5G.jpeg",
      title: "Pluralsight LIVE 2020",
      countCourses: 109,
      duration: "56 hours",
      introduction:
        "Pluralsight LIVE 2020. Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789.",
      progress: 0,
    },
    {
      id: 4,
      image: "https://brandslogos.com/wp-content/uploads/thumbs/angular-logo-vector.svg",
      title: "Angular",
      countCourses: 15,
      duration: "56 hours",
      introduction:
        "Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789.",
      progress: 2,
    },
  ];

  const renderListItems = (paths) => {
    return paths.map((item) => (
      <SectionPathsItem item={item} navigation={props.navigation} />
    ));
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

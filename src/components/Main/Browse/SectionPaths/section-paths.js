import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScreenKey } from "../../../../globals/constants";
import SectionPathsItem from "../SectionPathsItem/section-paths-item";

const SectionPaths = (props) => {
  const paths = [
    {
      id: 1,
      image: "https://i.imgur.com/MhDMe0i.jpg",
      title: "Styling the Web with Bootstrap",
      countCourses: 4,
      duration: "56 hours",
      introduction:
        "Styling the Web with Bootstrap. Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789.",
      progress: 2,
    },
    {
      id: 2,
      image: "https://i.imgur.com/MhDMe0i.jpg",
      title: "Failover Conf 2020",
      countCourses: 13,
      duration: "56 hours",
      introduction:
        "Failover Conf 2020. Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789.",
      progress: 0,
    },
    {
      id: 3,
      image: "https://i.imgur.com/MhDMe0i.jpg",
      title: "Pluralsight LIVE 2020",
      countCourses: 109,
      duration: "56 hours",
      introduction:
        "Pluralsight LIVE 2020. Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789.",
      progress: 0,
    },
    {
      id: 4,
      image: "https://i.imgur.com/MhDMe0i.jpg",
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
      <View style={styles.titleView}>
        <Text>{props.title}</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenKey.ListPaths, {
              item: props.item,
            });
          }}
        >
          <Text>{`See all >`}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>{renderListItems(paths)}</ScrollView>
    </View>
  );
};

export default SectionPaths;

const styles = StyleSheet.create({
  titleView: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

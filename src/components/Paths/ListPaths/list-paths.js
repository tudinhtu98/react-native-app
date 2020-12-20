import React from "react";
import { View, FlatList } from "react-native";
import ListPathsItem from "../ListPathsItem/list-paths-item";

const ListPaths = (props) => {
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
      image:
        "https://i.imgur.com/MhDMe0i.jpg",
      title: "Angular",
      countCourses: 15,
      duration: "56 hours",
      introduction:
        "Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789.",
      progress: 2,
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
        data={paths}
        renderItem={({ item }) => (
          <ListPathsItem navigation={props.navigation} item={item} />
        )}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListPaths;

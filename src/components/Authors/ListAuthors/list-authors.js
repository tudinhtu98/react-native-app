import React from "react";
import { View, FlatList } from "react-native";
import ListAuthorsItem from "../ListAuthorsItem/list-authors-item";

const ListAuthors = (props) => {
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
        data={authors}
        renderItem={({ item }) => (
          <ListAuthorsItem navigation={props.navigation} item={item} />
        )}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default ListAuthors;
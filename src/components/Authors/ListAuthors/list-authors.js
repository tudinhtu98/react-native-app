import React from "react";
import { View, FlatList } from "react-native";
import ListAuthorsItem from "../ListAuthorsItem/list-authors-item";

const ListAuthors = (props) => {
  const authors = props.authors;
  // const authors = [
  //   {
  //     id: 1,
  //     avatar: "https://i.imgur.com/Jvh1OQm.jpg",
  //     name: "Deborah Karata",
  //     countCourses: 3,
  //   },
  // ];

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
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListAuthors;

import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListSessionsItem from "../ListSessionsItem/list-sessions-item";

const ListSessions = (props) => {
  const sessions = [
    {
      id: 1,
      title: "Course Overview",
      duration: "2:04",
      data: [
        {
          title: "Course Overview",
          duration: "2:04",
        },
      ],
    },
    {
      id: 2,
      title: "Getting Started with Angular",
      duration: "38:45",
      data: [
        {
          title: "Introduction",
          duration: "2:55",
        },
        {
          title: "Practice Exercises",
          duration: "2:25",
        },
        {
          title: "Introduction to TypeScript",
          duration: "7:09",
        },
      ],
    },
    {
      id: 3,
      title: "Course Overview",
      duration: "2:04",
      data: [
        {
          title: "Course Overview",
          duration: "2:04",
        },
      ],
    },
    {
      id: 4,
      title: "Getting Started with Angular",
      duration: "38:45",
      data: [
        {
          title: "Introduction",
          duration: "2:55",
        },
        {
          title: "Practice Exercises",
          duration: "2:25",
        },
        {
          title: "Introduction to TypeScript",
          duration: "7:09",
        },
      ],
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
    <View style={styles.view}>
      <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <ListSessionsItem key={item.id.toString()} item={item} />
        )}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListSessions;

const styles = StyleSheet.create({
  view: {
    margin: 5,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

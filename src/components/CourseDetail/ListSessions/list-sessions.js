import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListSessionsItem from "../ListSessionsItem/list-sessions-item";

const ListSessions = (props) => {
  const sections = props.section;

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
        data={sections}
        renderItem={({ item }) => (
          <ListSessionsItem
            key={item.id.toString()}
            item={item}
            setUriVideo={props.setUriVideo}
          />
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
    flex: 1,
    padding: 10,
    // margin: 10,
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

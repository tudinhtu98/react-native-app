import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ThemeContext } from "../../../provider/theme-provider";
import ListSessionsItem from "../ListSessionsItem/list-sessions-item";

const ListSessions = (props) => {
  const { theme } = useContext(ThemeContext);
  const sections = props.route.params.sections;
  const setUriVideo = props.route.params.setUriVideo;

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
    <View style={{...styles.view, backgroundColor: theme.background}}>
      <FlatList
        data={sections}
        renderItem={({ item }) => (
          <ListSessionsItem
            key={item.id.toString()}
            item={item}
            setUriVideo={setUriVideo}
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

import React from "react";
import {
  Alert,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ViewSearch from "../../Common/view-search";

const Search = (props) => {
  const historySearchs = ["react native", "nodejs", "1", "2"];

  const renderItemHistorySearch = (item) => {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert("onPress item history search")}
      >
        <View style={styles.viewItem}>
          <Icon
            style={styles.icon}
            name="history"
            size={25}
            color={props.color}
          />
          <Text>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.scrollView}>
      <ViewSearch />
      <View style={styles.viewTop}>
        <Text>Recent searchs</Text>
        <TouchableOpacity onPress={() => Alert.alert("onPress Clear all")}>
          <Text style={styles.buttonClear}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={historySearchs}
          renderItem={({ item }) => renderItemHistorySearch(item)}
        />
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  scrollView: {
    margin: 5,
  },
  viewTop: {
    flexDirection: "row",
    margin: 5,
    marginTop: 20,
    justifyContent: "space-between",
  },
  viewItem: {
    flexDirection: "row",
    margin: 5,
  },
  icon: {
    marginRight: 10,
  },
  buttonClear: {
    color: "blue",
  },
});

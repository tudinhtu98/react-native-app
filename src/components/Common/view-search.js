import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ScreenKey } from "../../globals/constants";

const ViewSearch = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput style={styles.border} placeholder="Search text" />
      <TouchableOpacity
        style={styles.buttonSearch}
        onPress={() => {
          props.navigation.navigate(ScreenKey.SearchResultTab);
        }}
      >
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewSearch;

const styles = StyleSheet.create({
  border: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
  },
  buttonSearch: {
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "deepskyblue",
    backgroundColor: "deepskyblue",
    padding: 10,
  }
});

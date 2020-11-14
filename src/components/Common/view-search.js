import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ViewSearch = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput style={styles.border} placeholder="Search text" />
      <Button
        style={styles.border}
        onPress={() => {
          props.navigation.navigate("SearchResultTab");
        }}
        title="Search"
      />
    </View>
  );
};

export default ViewSearch;

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  border: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});

import React from "react";
import { View, TextInput, Button } from "react-native";

const ViewSearch = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        style={{ flex: 1, borderWidth: 1, borderColor: "gray" }}
        placeholder="Search text"
      />
      <Button
        onPress={() => {
          console.log("search");
        }}
        title="Search"
      />
    </View>
  );
};

export default ViewSearch;

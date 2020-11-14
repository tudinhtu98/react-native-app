import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { stylesGlo } from "../../../../../globals/styles";
import ListPaths from "../../../../Paths/ListPaths/list-paths";

const SearchResultPaths = (props) => {
  const countResult = 11;
  return (
    <View>
      <Text
        style={[styles.textResult, stylesGlo.textSmall]}
      >{`${countResult} Results`}</Text>
      <ListPaths navigation={props.navigation} />
    </View>
  );
};

export default SearchResultPaths;

const styles = StyleSheet.create({
  textResult: {
    margin: 10,
  },
});

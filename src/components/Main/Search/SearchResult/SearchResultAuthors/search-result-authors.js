import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { stylesGlo } from "../../../../../globals/styles";
import ListAuthors from "../../../../Authors/ListAuthors/list-authors";

const SearchResultAuthors = (props) => {
  const countResult = 20;
  return (
    <View>
      <Text
        style={[styles.textResult, stylesGlo.textSmall]}
      >{`${countResult} Results`}</Text>
      <ListAuthors />
    </View>
  );
};

export default SearchResultAuthors;

const styles = StyleSheet.create({
  textResult: {
    margin: 10,
  },
});

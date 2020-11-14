import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { stylesGlo } from "../../../../../globals/styles";
import ListCourses from "../../../../Courses/ListCourses/list-courses";

const SearchResultCourses = (props) => {
  const countResult = 167;
  return (
    <View>
      <Text
        style={[styles.textResult, stylesGlo.textSmall]}
      >{`${countResult} Results`}</Text>
      <ListCourses navigation={props.navigation} />
    </View>
  );
};

export default SearchResultCourses;

const styles = StyleSheet.create({
  textResult: {
    margin: 10,
  },
});

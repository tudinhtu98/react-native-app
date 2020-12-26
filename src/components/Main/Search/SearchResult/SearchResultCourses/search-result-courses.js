import React, { useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { stylesGlo } from "../../../../../globals/styles";
import { SearchContext } from "../../../../../provider/search-provider";
import ListCourses from "../../../../Courses/ListCourses/list-courses";

const SearchResultCourses = (props) => {
  const { state } = useContext(SearchContext);

  return (
    <View>
      {state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View>
          <Text
            style={[styles.textResult, stylesGlo.textSmall]}
          >{`${state.data.courses.total} results`}</Text>
          <ListCourses
            navigation={props.navigation}
            courses={state.data.courses.data}
          />
        </View>
      )}
    </View>
  );
};

export default SearchResultCourses;

const styles = StyleSheet.create({
  textResult: {
    margin: 10,
  },
});

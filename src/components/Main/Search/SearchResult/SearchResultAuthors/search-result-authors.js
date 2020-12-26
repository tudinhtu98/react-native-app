import React, { useContext } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { stylesGlo } from "../../../../../globals/styles";
import { SearchContext } from "../../../../../provider/search-provider";
import ListAuthors from "../../../../Authors/ListAuthors/list-authors";

const SearchResultAuthors = (props) => {
  const { state } = useContext(SearchContext);

  return (
    <View>
      {state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View>
          <Text
            style={[styles.textResult, stylesGlo.textSmall]}
          >{`${state.data.instructors.total} results`}</Text>
          <ListAuthors
            navigation={props.navigation}
            authors={state.data.instructors.data}
          />
        </View>
      )}
    </View>
  );
};

export default SearchResultAuthors;

const styles = StyleSheet.create({
  textResult: {
    margin: 10,
  },
});

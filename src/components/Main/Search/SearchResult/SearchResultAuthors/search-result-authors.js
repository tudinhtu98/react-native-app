import React, { useContext } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { stylesGlo } from "../../../../../globals/styles";
import { LanguageContext } from "../../../../../provider/language-provider";
import { SearchContext } from "../../../../../provider/search-provider";
import { ThemeContext } from "../../../../../provider/theme-provider";
import ListAuthors from "../../../../Authors/ListAuthors/list-authors";

const SearchResultAuthors = (props) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { state } = useContext(SearchContext);

  return (
    <View style={{ height: "100%", backgroundColor: theme.background }}>
      {state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View>
          <Text
            style={[
              styles.textResult,
              stylesGlo.textSmall,
              { color: theme.foreground },
            ]}
          >{`${state.data.instructors.total} ${language.results}`}</Text>
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

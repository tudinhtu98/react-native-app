import React, { useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { stylesGlo } from "../../../../../globals/styles";
import { LanguageContext } from "../../../../../provider/language-provider";
import { SearchContext } from "../../../../../provider/search-provider";
import { ThemeContext } from "../../../../../provider/theme-provider";
import ListCourses from "../../../../Courses/ListCourses/list-courses";

const SearchResultCourses = (props) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { state } = useContext(SearchContext);

  return (
    <View>
      {state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View style={{ backgroundColor: theme.background }}>
          <Text
            style={[
              styles.textResult,
              stylesGlo.textSmall,
              { color: theme.foreground },
            ]}
          >{`${state.data.courses.total} ${language.results}`}</Text>
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

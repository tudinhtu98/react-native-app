import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { ThemeContext } from "../../../../provider/theme-provider";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";

const SectionAuthors = (props) => {
  const { theme } = useContext(ThemeContext);
  const authors = props.authors || [];

  const renderListItems = (authors) => {
    return authors.map((item) => (
      <SectionAuthorsItem
        key={item.id.toString()}
        item={item}
        navigation={props.navigation}
      />
    ));
  };
  return (
    <View style={{ margin: 5 }}>
      <View>
        <Text style={{ margin: 5, color: theme.foreground }}>{props.title}</Text>
      </View>
      <ScrollView horizontal={true}>{renderListItems(authors)}</ScrollView>
    </View>
  );
};

export default SectionAuthors;

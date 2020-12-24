import React from "react";
import { View, Text, ScrollView } from "react-native";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";

const SectionAuthors = (props) => {
  const authors = props.authors || [];

  const renderListItems = (authors) => {
    return authors.map((item) => (
      <SectionAuthorsItem key={item.id.toString()} item={item} />
    ));
  };
  return (
    <View style={{ margin: 5 }}>
      <View>
        <Text style={{ margin: 5 }}>{props.title}</Text>
      </View>
      <ScrollView horizontal={true}>{renderListItems(authors)}</ScrollView>
    </View>
  );
};

export default SectionAuthors;

import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ThemeContext } from "../../../provider/theme-provider";
import ListComment from "./ListComment/list-comment";
import SectionAddComment from "./SectionAddComment/section-add-comment";

const Comment = (props) => {
  const { theme } = useContext(ThemeContext);
  const ratings = props.route.params.ratings;
  const courseId = props.route.params.courseId;
  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <Text style={{ ...styles.textLarge, color: theme.foreground }}>
        Add new comment
      </Text>
      <SectionAddComment courseId={courseId} />
      <Text style={{ ...styles.textLarge, color: theme.foreground }}>
        List comment
      </Text>
      <ListComment ratingList={ratings.ratingList} />
    </ScrollView>
  );
};

export default Comment;

const styles = StyleSheet.create({
  textLarge: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

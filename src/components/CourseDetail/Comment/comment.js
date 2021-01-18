import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ListComment from "./ListComment/list-comment";
import SectionAddComment from "./SectionAddComment/section-add-comment";

const Comment = (props) => {
  const ratings = props.route.params.ratings;
  const courseId = props.route.params.courseId;
  return (
    <View>
      <Text style={styles.textLarge}>Add new comment</Text>
      <SectionAddComment courseId={courseId} />
      <Text style={styles.textLarge}>List comment</Text>
      <ListComment ratingList={ratings.ratingList} />
    </View>
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

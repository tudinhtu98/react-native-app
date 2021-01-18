import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Rating } from "react-native-ratings";

const ListCommentItem = (props) => {
  return (
    <View>
      <View style={styles.viewProfile}>
        <Image style={styles.avatar} source={{ uri: props.item.user.avatar }} />
        <Text style={styles.textUsername}>{props.item.user.name}</Text>
        <Rating
          style={styles.rating}
          imageSize={17}
          readonly
          startingValue={props.item.contentPoint || 0}
          tintColor="lightgray"
        />
      </View>
      <Text style={styles.textDatetime}>
        {new Date(props.item.createdAt || props.item.updatedAt).toDateString()}
      </Text>
      <Text style={styles.textContent}>{props.item.content}</Text>
    </View>
  );
};

export default ListCommentItem;
const styles = StyleSheet.create({
  viewProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 35,
    margin: 10,
  },
  textUsername: {
    fontSize: 15,
  },
  textContent: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 17,
  },
  rating: {
    margin: 5,
  },
  textDatetime: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 10,
    color: "gray",
  },
});

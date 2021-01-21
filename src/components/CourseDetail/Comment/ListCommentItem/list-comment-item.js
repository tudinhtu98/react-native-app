import React, { useContext } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Rating } from "react-native-ratings";
import { ThemeContext } from "../../../../provider/theme-provider";

const ListCommentItem = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <View style={styles.viewProfile}>
        <Image style={styles.avatar} source={{ uri: props.item.user.avatar }} />
        <Text style={{ ...styles.textUsername, color: theme.foreground }}>
          {props.item.user.name}
        </Text>
        <Rating
          style={styles.rating}
          imageSize={17}
          readonly
          startingValue={props.item.contentPoint || 0}
          tintColor={theme.background}
        />
      </View>
      <Text style={styles.textDatetime}>
        {new Date(props.item.createdAt || props.item.updatedAt).toDateString()}
      </Text>
      <Text style={{ ...styles.textContent, color: theme.foreground }}>
        {props.item.content}
      </Text>
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

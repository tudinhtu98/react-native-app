import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import ListCommentItem from "../ListCommentItem/list-comment-item";

const { height } = Dimensions.get("window");

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: "#CED0CE",
        marginLeft: "2%",
        marginRight: "2%",
      }}
    />
  );
};

const ListComment = (props) => {
  return (
    <FlatList
      style={{ marginBottom: (height * 3.25) / 10 }}
      data={props.ratingList}
      renderItem={({ item }) => (
        <ListCommentItem
          key={item.id.toString()}
          navigation={props.navigation}
          item={item}
        />
      )}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={() => {
        // console.log("Load more");
      }}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ListComment;

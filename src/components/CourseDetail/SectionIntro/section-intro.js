import React from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SectionIntro = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{props.courseInfo.title}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("press author");
          }}
        >
          <View style={styles.author}>
            <Text>{props.courseInfo.author}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text
        style={[styles.darkText, { margin: 5 }]}
      >{`${props.courseInfo.level} . ${props.courseInfo.released} . ${props.courseInfo.duration}`}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={styles.iconCenter}
          onPress={() => Alert.alert("onPress Bookmark")}
        >
          <Icon name="bookmark-outline" size={25} color="gray" />
          <Text>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconCenter}
          onPress={() => Alert.alert("onPress Share")}
        >
          <Icon name="share" size={25} color="gray" />
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <Text>{props.courseInfo.introduction}</Text>
    </View>
  );
};

export default SectionIntro;

const styles = StyleSheet.create({
  view: {
    margin: 10,
    height: 300,
  },
  title: {
    fontSize: 20,
    margin: 5,
  },
  author: {
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  darkText: {
    color: "darkgray",
  },
  iconCenter: {
    margin: 5,
    alignItems: "center"
  },
});

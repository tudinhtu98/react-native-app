import React from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SectionIntro = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{props.courseInfo.title}</Text>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("press author");
        }}
      >
        <View style={styles.author}>
          <Text>{props.courseInfo.author}</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={[styles.darkText, { margin: 5 }]}
      >{`${props.courseInfo.level} . ${props.courseInfo.released} . ${props.courseInfo.duration}`}</Text>
      <View>
        <TouchableOpacity style={{ margin: 5 }}>
          <Icon name="bookmark" size={25} color="gray" />
          <Text>Bookmark</Text>
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
});

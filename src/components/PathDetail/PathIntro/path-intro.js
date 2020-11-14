import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const PathIntro = (props) => {
  return (
    <View style={styles.view}>
      <View style={styles.viewTop}>
        <Image style={styles.image} source={{ uri: props.pathIntro.image }} />
        <View>
          <Text style={styles.textMedium}>{props.pathIntro.title}</Text>
          <Text>{`${props.pathIntro.countCourses} courses . ${props.pathIntro.duration}`}</Text>
        </View>
      </View>
      <View style={styles.viewIntroduction}>
        <Text>{props.pathIntro.introduction}</Text>
      </View>
      <View>
        <Text
          style={styles.textMedium}
        >{`Your Progrees: ${props.pathIntro.progress}%`}</Text>
      </View>
    </View>
  );
};

export default PathIntro;

const styles = StyleSheet.create({
  view: {
    height: 300,
    marginTop: 50,
    margin: 10,
  },
  viewTop: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
  },
  textMedium: {
    fontSize: 20,
  },
  viewIntroduction: {
    margin: 5,
    height: 150,
  },
});

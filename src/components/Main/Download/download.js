import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import ListCourses from "../../Courses/ListCourses/list-courses";

const Download = (props) => {
  const data = {
    countCourses: 12,
    size: 120,
  };
  return (
    <View>
      <View style={styles.view}>
        <Text>{`${data.countCourses} courses (${data.size} MB)`}</Text>
        <TouchableOpacity onPress={() => Alert.alert("Press Remove On")}>
          <Text style={styles.textRemove}>REMOVE ALL</Text>
        </TouchableOpacity>
      </View>
      <ListCourses navigation={props.navigation} />
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  textRemove: {
    color: "blue",
  },
});

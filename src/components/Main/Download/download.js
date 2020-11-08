import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import ListCourses from "../../Courses/ListCourses/list-courses";

const Download = (props) => {
  const data = {
    countCourses: 3,
    size: 12,
  };
  return (
    <View>
      <View style={styles.view}>
        <Text>{`${data.countCourses} courses (${data.size} MB)`}</Text>
        <TouchableOpacity onPress={()=> Alert.alert("Press Remove On")}>
          <Text style={styles.textRemove}>REMOVE ALL</Text>
        </TouchableOpacity>
      </View>
      <ListCourses />
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:120,
    margin: 10,
  },
  textRemove: {
    color: "blue",
  },
});

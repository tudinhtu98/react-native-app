import React from "react";
import { Text, View } from "react-native";
import ListCourses from "../../Courses/ListCourses/list-courses";
import PathLevelItem from "../PathLevelItem/path-level-item";

const PathLevel = (props) => {
  return props.path.map((level) => (
    <PathLevelItem key={level.id.toString()} level={level} navigation={props.navigation} />
  ));
};

export default PathLevel;

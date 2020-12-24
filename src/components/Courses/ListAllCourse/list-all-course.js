import React from "react";
import { View } from "react-native";
import ListCourses from "../ListCourses/list-courses";

const ListAllCourse = (props) => {
  const data = props.route.params.data;

  return (
    <View>
      <ListCourses courses={data}/>
    </View>
  );
};

export default ListAllCourse;

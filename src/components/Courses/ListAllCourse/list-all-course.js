import React, { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../../../provider/theme-provider";
import ListCourses from "../ListCourses/list-courses";

const ListAllCourse = (props) => {
  const { theme } = useContext(ThemeContext);
  const data = props.route.params.data;

  return (
    <View style={{ height: "100%", backgroundColor: theme.background }}>
      <ListCourses courses={data} navigation={props.navigation} />
    </View>
  );
};

export default ListAllCourse;

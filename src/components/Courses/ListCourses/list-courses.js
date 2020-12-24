import React from "react";
import { FlatList, View, Text } from "react-native";
import { ScreenKey, textGlo } from "../../../globals/constants";
import { stylesGlo } from "../../../globals/styles";
import ListCoursesItem from "../ListCoursesItem/list-courses-item";

const ListCourses = (props) => {
  const courses = props.route.params.data;

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

  const onPressListCoursesItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, { item });
  };

  return (
    <View>
      {courses.length == 0 ? (
        <Text style={stylesGlo.emptyCourses}>{textGlo.emptyCourse}</Text>
      ) : (
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <ListCoursesItem
              key={item.id.toString()}
              navigation={props.navigation}
              item={item}
              onPressListCoursesItem={onPressListCoursesItem}
            />
          )}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => {
            console.log("Load more");
          }}
          onEndReachedThreshold={0.3}
        />
      )}
    </View>
  );
};

export default ListCourses;

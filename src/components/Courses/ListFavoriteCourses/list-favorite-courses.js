import React from "react";
import { FlatList, View, Text } from "react-native";
import { ScreenKey, textGlo } from "../../../globals/constants";
import { stylesGlo } from "../../../globals/styles";
import ListFavoriteCoursesItem from "../ListFavoriteCoursesItem/list-favorite-courses-item";

const ListFavoriteCourses = (props) => {
  const courses = props.courses;

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

  const onPressListFavoriteCoursesItem = (item) => {
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
            <ListFavoriteCoursesItem
              key={item.id.toString()}
              navigation={props.navigation}
              item={item}
              onPressListFavoriteCoursesItem={onPressListFavoriteCoursesItem}
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

export default ListFavoriteCourses;

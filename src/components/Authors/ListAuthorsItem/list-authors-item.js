import React, { useContext } from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { ScreenKey } from "../../../globals/constants";
import { stylesGlo } from "../../../globals/styles";
import { ThemeContext } from "../../../provider/theme-provider";

const ListAuthorsItem = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate(ScreenKey.AuthorDetail, {
            item: props.item,
          });
        }}
      >
        <Image style={styles.avatar} source={{ uri: props.item.avatar }} />
        <View style={styles.viewPath}>
          <Text style={{ color: theme.foreground }}>{props.item.name}</Text>
          <Text
            style={stylesGlo.textSmall}
          >{`${props.item.numcourses} courses`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListAuthorsItem;

const styles = StyleSheet.create({
  viewPath: {
    marginHorizontal: 5,
  },
  item: {
    flexDirection: "row",
    margin: 10,
    height: 80,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Share,
  Text,
} from "react-native";
import ViewCourse from "../../Common/view-course";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { stylesGlo } from "../../../globals/styles";

const ListFavoriteCoursesItem = (props) => {
  const handleShareCourse = () => {
    Share.share({ message: "share course" });
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.onPressListFavoriteCoursesItem(props.item);
        }}
      >
        <Image style={styles.image} source={{ uri: props.item.courseImage }} />
        <View style={styles.view}>
          <View>
            <Text style={{ flexWrap: "wrap" }}>{props.item.courseTitle}</Text>
            <Text style={stylesGlo.textSmall}>{props.item.instructorName}</Text>
          </View>
          <Text
            style={stylesGlo.textSmall}
          >{`${props.item.courseAveragePoint} stars`}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.dots}>
        <Menu>
          <MenuTrigger>
            <Icon name="dots-vertical" size={25} color="darkgray" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption>
              <Text style={styles.textMenuOption}>Remove from favorite</Text>
            </MenuOption>
            <MenuOption>
              <Text style={styles.textMenuOption}>Add to channel</Text>
            </MenuOption>
            <MenuOption>
              <Text style={styles.textMenuOption}>Download</Text>
            </MenuOption>
            <MenuOption onSelect={handleShareCourse}>
              <Text style={styles.textMenuOption}>Share</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

export default ListFavoriteCoursesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    margin: 10,
    height: 80,
  },
  image: {
    width: 100,
    height: 80,
  },
  dots: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    padding: 5,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  textMenuOption: {
    margin: 10,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 5,
    paddingBottom: 5,
  },
  darkText: {
    color: "darkgray",
  },
});

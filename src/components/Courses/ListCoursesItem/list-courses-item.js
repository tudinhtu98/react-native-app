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
import { ScreenKey } from "../../../globals/constants";

const ListCoursesItem = (props) => {
  const handleShareCourse = () => {
    Share.share({ message: "share course" });
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate(ScreenKey.CourseDetail, {
            item: props.item,
          });
        }}
      >
        <Image style={styles.image} source={{ uri: props.item.image }} />
        <ViewCourse item={props.item} />
      </TouchableOpacity>
      <View style={styles.dots}>
        <Menu>
          <MenuTrigger>
            <Icon name="dots-vertical" size={25} color="darkgray" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption>
              <Text style={styles.textMenuOption}>Bookmark</Text>
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

export default ListCoursesItem;

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
});

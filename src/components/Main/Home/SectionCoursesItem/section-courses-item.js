import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Share,
  Text,
} from "react-native";
import { stylesGlo } from "../../../../globals/styles";
import ViewCourse from "../../../Common/view-course";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const SectionCoursesItem = (props) => {
  const handleShareCourse = () => {
    Share.share({ message: "share course" });
  };

  return (
    <TouchableOpacity
      style={[styles.item, stylesGlo.shadow]}
      onPress={() => {
        props.onPressSectionCoursesItem(props.item);
      }}
    >
      <View>
        <Image source={{ uri: props.item.imageUrl }} style={styles.image} />
        <View style={styles.dots}>
          <Menu>
            <MenuTrigger>
              <Icon name="dots-vertical" size={25} color="darkgray" />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={handleShareCourse}>
                <Text style={styles.textMenuOption}>Share</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>

      <ViewCourse item={props.item} />
    </TouchableOpacity>
  );
};

export default SectionCoursesItem;

const styles = StyleSheet.create({
  item: {
    margin: 10,
    width: 200,
    height: 200,
    backgroundColor: "lightgray",
  },
  image: {
    height: 100,
  },
  dots: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  textMenuOption: {
    margin: 10,
  },
});

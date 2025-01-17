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

const ListCoursesItem = (props) => {
  const handleShareCourse = () => {
    Share.share({ message: "share course" });
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.onPressListCoursesItem(props.item);
        }}
      >
        <Image style={styles.image} source={{ uri: props.item.imageUrl }} />
        <ViewCourse item={props.item} />
      </TouchableOpacity>
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

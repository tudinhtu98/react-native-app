import React, { useContext } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Share,
  Text,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { stylesGlo } from "../../../globals/styles";
import { FavoriteCourseContext } from "../../../provider/favorite-course-provider";
import { apiLikeCourse } from "../../../core/services/course-service";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import { LanguageContext } from "../../../provider/language-provider";

const ListFavoriteCoursesItem = (props) => {
  const { state } = useContext(AuthenticationContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { dislikeCourse } = useContext(FavoriteCourseContext);
  const handleShareCourse = () => {
    Share.share({ message: "share course" });
  };

  const onSelectDislikeCourse = () => {
    apiLikeCourse(state.token, props.item.id)
      .then((res) => {
        if (res.status === 200) {
          dislikeCourse(props.item.id);
        } else {
          throw new Error(err);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
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
            <Text style={{ flexWrap: "wrap", color: theme.foreground }}>
              {props.item.courseTitle}
            </Text>
            <Text style={stylesGlo.textSmall}>{props.item.instructorName}</Text>
          </View>
          <Text
            style={stylesGlo.textSmall}
          >{`${props.item.coursePrice}đ . ${props.item.courseSoldNumber} ${language.sold}`}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.dots}>
        <Menu>
          <MenuTrigger>
            <Icon name="dots-vertical" size={25} color="darkgray" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={onSelectDislikeCourse}>
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

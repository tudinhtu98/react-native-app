import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  Share,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SectionIntro = (props) => {
  const course = props.course;
  const [bookmarkIconName, setBookmarkIconName] = useState("bookmark-outline");

  const handleBookmark = () => {
    if (bookmarkIconName == "bookmark-outline") {
      setBookmarkIconName("bookmark");
    } else {
      setBookmarkIconName("bookmark-outline");
    }
  };

  const handleShareCourse = () => {
    Share.share({ message: "share course" });
  };
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{course.title}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("press author");
          }}
        >
          <View style={styles.author}>
            <Text>{course.instructor["name"]}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={[styles.darkText, { margin: 5 }]}>{`${new Date(
        course.createdAt
      ).toDateString()} . ${course.totalHours} hours`}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.iconCenter} onPress={handleBookmark}>
          <Icon name={bookmarkIconName} size={25} color="gray" />
          <Text>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCenter} onPress={handleShareCourse}>
          <Icon name="share" size={25} color="gray" />
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollIntro}>
        <Text>{course.description}</Text>
      </ScrollView>
    </View>
  );
};

export default SectionIntro;

const styles = StyleSheet.create({
  view: {
    margin: 10,
    height: 300,
  },
  title: {
    fontSize: 20,
    margin: 5,
  },
  author: {
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  darkText: {
    color: "darkgray",
  },
  iconCenter: {
    margin: 5,
    alignItems: "center",
  },
  scrollIntro: {
    marginTop: 20,
    height: 50,
  },
});

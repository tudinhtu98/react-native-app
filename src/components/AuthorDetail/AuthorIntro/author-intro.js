import React, { useContext } from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import { stylesGlo } from "../../../globals/styles";
import { LanguageContext } from "../../../provider/language-provider";

const { width } = Dimensions.get("window");

const AuthorIntro = (props) => {
  const { language } = useContext(LanguageContext);
  const author = props.author;
  return (
    <View style={styles.view}>
      <Image
        source={{ uri: author.avatar }}
        style={[styles.avatar, stylesGlo.shadow]}
      />
      <View style={styles.viewInfo}>
        <Text style={styles.name}>{author.name}</Text>
        <Text>{`Email: ${author.email}`}</Text>
        <Text>{`${language.phone}: ${author.phone || ""}`}</Text>
        <Text>{`${language.skill}: ${
          author.skills ? author.skills.join(", ") : ""
        }`}</Text>
        <Text>{`${language.majorSkill}: ${author.major || ""}`}</Text>
        <Text>{`${language.totalCourses}: ${author.totalCourse || ""}`}</Text>
        <Text>{`${language.introduction}: ${author.intro || ""}`}</Text>
      </View>
    </View>
  );
};

export default AuthorIntro;

const styles = StyleSheet.create({
  view: {
    // flex: 1,
    flexDirection: "row",
    // height: 200,
    backgroundColor: "lightgray",
  },
  viewInfo: {
    margin: 10,
    width: width - 100 - 30,
    flexDirection: "column",
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 27,
    fontWeight: "bold",
  },
});

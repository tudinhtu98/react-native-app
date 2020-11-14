import React from "react";
import { ScrollView } from "react-native";
import PathIntro from "./PathIntro/path-intro";
import PathLevel from "./PathLevel/path-level";

const PathDetail = (props) => {
  const item = props.route.params.item;
  props.navigation.setOptions({ title: item.title });
  const pathIntro = item;
  const path = [
    {
      title: "Beginner",
    },
    {
      title: "Intermediate",
    },
    {
      title: "Advanced",
    },
  ];
  return (
    <ScrollView>
      <PathIntro pathIntro={pathIntro} />
      <PathLevel path={path} navigation={props.navigation} />
    </ScrollView>
  );
};

export default PathDetail;

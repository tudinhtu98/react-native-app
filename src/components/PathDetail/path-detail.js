import React, {useEffect} from "react";
import { LogBox, ScrollView } from "react-native";
import PathIntro from "./PathIntro/path-intro";
import PathLevel from "./PathLevel/path-level";

const PathDetail = (props) => {
  const item = props.route.params.item;
  props.navigation.setOptions({ title: item.title });
  const pathIntro = item;
  const path = [
    {
      id: 1,
      title: "Beginner",
    },
    {
      id: 2,
      title: "Intermediate",
    },
    {
      id: 3,
      title: "Advanced",
    },
  ];

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <ScrollView>
      <PathIntro pathIntro={pathIntro} />
      <PathLevel path={path} navigation={props.navigation} />
    </ScrollView>
  );
};

export default PathDetail;

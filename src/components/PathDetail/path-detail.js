import React from "react";
import { ScrollView } from "react-native";
import PathIntro from "./PathIntro/path-intro";
import PathLevel from "./PathLevel/path-level";

const PathDetail = (props) => {
  const pathIntro = {
    title: "Angular",
    image: "https://assets.stickpng.com/thumbs/5847ea22cef1014c0b5e4833.png",
    countCourses: 15,
    duration: "56 hours",
    introduction:
      "Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789. Angular is a complete JavaScript framework for 123456789.",
    progress: 2,
  };
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
      <PathLevel path={path} />
    </ScrollView>
  );
};

export default PathDetail;

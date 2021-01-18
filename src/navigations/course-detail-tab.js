import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScreenKey } from "../globals/constants";
import ListSessions from "../components/CourseDetail/ListSessions/list-sessions";
import ListAllCourse from "../components/Courses/ListAllCourse/list-all-course";
import SectionIntro from "../components/CourseDetail/SectionIntro/section-intro";
import { LogBox } from "react-native";
import Comment from "../components/CourseDetail/Comment/comment";

const Tab = createMaterialTopTabNavigator();

const CourseDetailTab = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs([
      "Non-serializable values were found in the navigation state",
    ]);
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenKey.SectionIntro}
        component={SectionIntro}
        options={{ title: "Info" }}
        initialParams={{
          course: props.course,
        }}
      />
      <Tab.Screen
        name={ScreenKey.ListSessions}
        component={ListSessions}
        options={{ title: "Sessons" }}
        initialParams={{
          sections: props.course.section,
          setUriVideo: props.setUriVideo,
        }}
      />
      <Tab.Screen
        name={ScreenKey.ListAllCourse}
        component={ListAllCourse}
        options={{ title: "Related Courses" }}
        initialParams={{ data: props.course.coursesLikeCategory }}
      />
      <Tab.Screen
        name={ScreenKey.Comment}
        component={Comment}
        initialParams={{
          ratings: props.course.ratings,
          courseId: props.course.id,
        }}
      />
    </Tab.Navigator>
  );
};

export default CourseDetailTab;

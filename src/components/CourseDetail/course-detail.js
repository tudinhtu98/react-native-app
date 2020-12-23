import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  LogBox,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { apiGetCourseDetail } from "../../core/services/course-service";
import ListSessions from "./ListSessions/list-sessions";
import SectionIntro from "./SectionIntro/section-intro";
import VideoPlayer from "./VideoPlayer/video-player";

const { height } = Dimensions.get("window");

const CourseDetail = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [course, setCourse] = useState({});

  useEffect(() => {
    setLoading(true);
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    props.navigation.setOptions({ title: props.route.params.item.title });
    //Call API
    apiGetCourseDetail(props.route.params.item.id)
      .then((res) => {
        if (res.status === 200) {
          setCourse(res.data.payload);
        } else {
          throw new Error(err);
        }
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View style={{ flex: 1 }}>
          <VideoPlayer />
          <View style={{ height: (height * 6.22) / 10 }}>
            <ScrollView>
              <SectionIntro course={course} />
              <ListSessions section={course.section} />
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default CourseDetail;

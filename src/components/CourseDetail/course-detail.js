import React, { useState, useEffect, useContext } from "react";
import {
  View,
  LogBox,
  ActivityIndicator,
  Dimensions,
  BackHandler,
} from "react-native";
import { apiGetCourseDetail } from "../../core/services/course-service";
import CourseDetailTab from "../../navigations/course-detail-tab";
import { ThemeContext } from "../../provider/theme-provider";
import VideoPlayer from "./VideoPlayer/video-player";

const { height } = Dimensions.get("window");

const CourseDetail = (props) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const [uriVideo, setUriVideo] = useState("");

  const CallAPIGetCourseDetail = () => {
    apiGetCourseDetail(props.route.params.item.id)
      .then((res) => {
        if (res.status === 200) {
          if (
            res.data.payload.section[0] &&
            res.data.payload.section[0].lesson[0]
          ) {
            setUriVideo(res.data.payload.section[0].lesson[0].videoUrl);
          }
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
  };

  useEffect(() => {
    const backAction = () => {
      props.navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    setLoading(true);
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    props.navigation.setOptions({ title: props.route.params.title });
    CallAPIGetCourseDetail();
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: theme.background }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View style={{ flex: 1 }}>
          <VideoPlayer uriVideo={uriVideo} />
          <View style={{ height: (height * 6.22) / 10 }}>
            <CourseDetailTab course={course} setUriVideo={setUriVideo} />
          </View>
        </View>
      )}
    </View>
  );
};

export default CourseDetail;

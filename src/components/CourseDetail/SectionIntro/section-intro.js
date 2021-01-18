import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  Share,
} from "react-native";
import { Rating } from "react-native-ratings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  apiGetCourseLikeStatus,
  apiLikeCourse,
  apiCheckOwnCourseStatus,
  apiAddCourse,
} from "../../../core/services/course-service";
import { convertHourToMin } from "../../../core/utilities/date-time-utilities";
import { stylesGlo } from "../../../globals/styles";
import { AuthenticationContext } from "../../../provider/authentication-provider";

const SectionIntro = (props) => {
  const course = props.route.params.course;
  const { state } = useContext(AuthenticationContext);
  const [favoriteIconName, setFavoriteIconName] = useState("favorite-border");
  const [addIconName, setAddIconName] = useState("add");
  const [likeStatus, setLikeStatus] = useState(false);
  const [ownStatus, setOwnStatus] = useState(false);

  const CallAPIGetCourseLikeStatus = () => {
    apiGetCourseLikeStatus(state.token, course.id)
      .then((res) => {
        if (res.status === 200) {
          setLikeStatus(res.data.likeStatus);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  const CallAPIOwnCourseStatus = () => {
    apiCheckOwnCourseStatus(state.token, course.id)
      .then((res) => {
        if (res.status === 200) {
          setOwnStatus(res.data.payload.isUserOwnCourse);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const CallAPILike = () => {
    apiLikeCourse(state.token, course.id)
      .then((res) => {
        if (res.status === 200) {
          setLikeStatus(res.data.likeStatus);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const CallAPIAddCourse = () => {
    apiAddCourse(state.token, course.id)
      .then((res) => {
        if (res.status === 200) {
          setOwnStatus(true);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        Alert.alert("Failed!", err.response.data.messsage);
      });
  };

  useEffect(() => {
    CallAPIGetCourseLikeStatus();
    CallAPIOwnCourseStatus();
  }, []);

  useEffect(() => {
    if (likeStatus) {
      setFavoriteIconName("favorite");
    } else {
      setFavoriteIconName("favorite-border");
    }
  }, [likeStatus]);

  useEffect(() => {
    if (ownStatus) {
      setAddIconName("check");
    } else {
      setAddIconName("add");
    }
  }, [ownStatus]);

  const handleFavorite = () => {
    CallAPILike();
  };
  const handleAddCourse = () => {
    CallAPIAddCourse();
  };

  const handleShareCourse = () => {
    Share.share({
      message: "http://dev.letstudy.org/course-detail/" + course.id,
    });
  };

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{course.title}</Text>
      <Rating
        style={styles.rating}
        imageSize={20}
        readonly
        startingValue={course.contentPoint || 0}
        tintColor="lightgray"
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            // Alert.alert("press author");
          }}
        >
          <View style={styles.author}>
            <Text>{course.instructor ? course.instructor["name"] : ""}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={[styles.darkText, { margin: 5 }]}>{`${new Date(
        course.createdAt
      ).toDateString()} . ${convertHourToMin(
        course.totalHours || 0
      )} mins`}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={styles.iconCenter}
          onPress={handleAddCourse}
          disabled={ownStatus}
        >
          <MaterialIcons name={addIconName} size={25} color="green" />
          <Text>Get Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCenter} onPress={handleFavorite}>
          <MaterialIcons name={favoriteIconName} size={25} color="red" />
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCenter} onPress={handleShareCourse}>
          <MaterialIcons name="share" size={25} color="gray" />
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.scrollIntro, stylesGlo.shadow]}>
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
  rating: {
    margin: 5,
    alignItems: "flex-start",
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
    height: 50,
    marginTop: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
  },
});

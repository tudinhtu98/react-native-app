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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  apiGetCourseLikeStatus,
  apiLikeCourse,
} from "../../../core/services/course-service";
import { AuthenticationContext } from "../../../provider/authentication-provider";

const SectionIntro = (props) => {
  const course = props.course;
  const { state } = useContext(AuthenticationContext);
  const [favoriteIconName, setFavoriteIconName] = useState("favorite-border");
  const [likeStatus, setLikeStatus] = useState(false);

  const CallAPIGetCourseLikeStatus = () => {
    apiGetCourseLikeStatus(state.token, course.id)
      .then((res) => {
        if (res.status === 200) {
          setLikeStatus(res.data.likeStatus);
        } else {
          throw new Error(err);
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
          throw new Error(err);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    CallAPIGetCourseLikeStatus();
  }, []);

  useEffect(() => {
    if (likeStatus) {
      setFavoriteIconName("favorite");
    } else {
      setFavoriteIconName("favorite-border");
    }
  }, [likeStatus]);

  const handleFavorite = () => {
    CallAPILike();
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
        <TouchableOpacity style={styles.iconCenter} onPress={handleFavorite}>
          <MaterialIcons name={favoriteIconName} size={25} color="red" />
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCenter} onPress={handleShareCourse}>
          <MaterialIcons name="share" size={25} color="gray" />
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

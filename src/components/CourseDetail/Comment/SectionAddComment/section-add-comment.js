import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Rating } from "react-native-ratings";
import { apiAddComment } from "../../../../core/services/course-service";
import { AuthenticationContext } from "../../../../provider/authentication-provider";

const SectionAddComment = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [point, setPoint] = useState(0);
  const { state } = useContext(AuthenticationContext);

  const SubmitComment = () => {
    setLoading(true);
    apiAddComment(state.token, props.courseId, point, content)
      .then((res) => {
        if (res.status === 200) {
          Alert.alert("Submit new comment successfull");
        } else {
          Alert.alert("Failed!");
        }
      })
      .catch((err) => {
        Alert.alert("Failed!", err.response.data.message);
        // throw new Error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const ratingCompleted = (point) => {
    setPoint(point);
  };

  return (
    <View style={styles.viewAddComment}>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(content) => setContent(content)}
      />
      <Rating
        style={styles.rating}
        imageSize={30}
        startingValue={0}
        onFinishRating={ratingCompleted}
        tintColor="lightgray"
      />
      <View style={{ alignItems: "center" }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={SubmitComment}>
            <Text style={{ color: "white" }}>Gửi</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SectionAddComment;

const styles = StyleSheet.create({
  viewAddComment: {
    height: 150,
    margin: 5,
  },
  rating: {
    margin: 5,
  },
  textInput: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 15,
    padding: 5,
  },
  button: {
    height: 40,
    width: 70,
    backgroundColor: "darkgreen",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    borderRadius: 20,
  },
});

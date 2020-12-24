import React, { useEffect, useState } from "react";
import { ActivityIndicator, LogBox, View } from "react-native";
import { apiGetAuthorDetail } from "../../core/services/author-service";
import ListCourses from "../Courses/ListCourses/list-courses";
import AuthorIntro from "./AuthorIntro/author-intro";

const AuthorDetail = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const item = props.route.params.item;
  props.navigation.setOptions({ title: item.name || item["user.name"] });

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    props.navigation.setOptions({ title: props.route.params.item.title });
    //Call API
    apiGetAuthorDetail(item.id)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.payload);
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
        <View>
          <AuthorIntro author={data} />
          <ListCourses courses={data.courses} navigation={props.navigation} />
        </View>
      )}
    </View>
  );
};

export default AuthorDetail;

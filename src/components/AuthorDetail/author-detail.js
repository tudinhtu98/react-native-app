import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, LogBox, View } from "react-native";
import { apiGetAuthorDetail } from "../../core/services/author-service";
import { ThemeContext } from "../../provider/theme-provider";
import ListCourses from "../Courses/ListCourses/list-courses";
import AuthorIntro from "./AuthorIntro/author-intro";

const AuthorDetail = (props) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const item = props.route.params.item;

  const CallAPIGetAuthorDetail = () => {
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
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    props.navigation.setOptions({ title: item.name || item["user.name"] });
    CallAPIGetAuthorDetail();
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: theme.background }}>
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

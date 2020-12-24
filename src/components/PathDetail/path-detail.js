import React, { useContext, useEffect, useState } from "react";
import { LogBox, ScrollView, View, ActivityIndicator } from "react-native";
import { apiGetCourseByCategoryId } from "../../core/services/category-service";
import { AuthenticationContext } from "../../provider/authentication-provider";
import ListCourses from "../Courses/ListCourses/list-courses";
import SectionAuthors from "../Main/Browse/SectionAuthors/section-authors";
import PathIntro from "./PathIntro/path-intro";
import PathLevel from "./PathLevel/path-level";

const PathDetail = (props) => {
  const { state } = useContext(AuthenticationContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const item = props.route.params.item;
  props.navigation.setOptions({ title: item.name });

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    props.navigation.setOptions({ title: props.route.params.item.title });
    //Call API
    apiGetCourseByCategoryId(state.token, props.route.params.item.id, 10, 0)
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
        <ScrollView>
          {/* <PathIntro pathIntro={pathIntro} /> */}
          {/* <PathLevel data={data} navigation={props.navigation} /> */}
          <ListCourses
            courses={data.courses.data}
            navigation={props.navigation}
          />
          <SectionAuthors
            title="Authors related"
            navigation={props.navigation}
            authors={data.instructors.data}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default PathDetail;

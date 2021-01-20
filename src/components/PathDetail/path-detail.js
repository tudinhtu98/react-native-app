import React, { useContext, useEffect, useState } from "react";
import { LogBox, ScrollView, View, ActivityIndicator } from "react-native";
import { apiGetCourseByCategoryId } from "../../core/services/category-service";
import { AuthenticationContext } from "../../provider/authentication-provider";
import { LanguageContext } from "../../provider/language-provider";
import { ThemeContext } from "../../provider/theme-provider";
import ListCourses from "../Courses/ListCourses/list-courses";
import SectionAuthors from "../Main/Browse/SectionAuthors/section-authors";
import PathIntro from "./PathIntro/path-intro";
import PathLevel from "./PathLevel/path-level";

const PathDetail = (props) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { state } = useContext(AuthenticationContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const CallAPIGetCourseByCategoryId = () => {
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
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    CallAPIGetCourseByCategoryId();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <ScrollView
          style={{ height: "100%", backgroundColor: theme.background }}
        >
          {/* <PathIntro pathIntro={pathIntro} /> */}
          {/* <PathLevel data={data} navigation={props.navigation} /> */}
          <ListCourses
            courses={data.courses.data}
            navigation={props.navigation}
          />
          <SectionAuthors
            title={language.authorsRelated}
            navigation={props.navigation}
            authors={data.instructors.data}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default PathDetail;

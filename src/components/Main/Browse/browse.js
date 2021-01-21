import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ScreenKey } from "../../../globals/constants";
import { AuthorContext } from "../../../provider/author-provider";
import { LanguageContext } from "../../../provider/language-provider";
import { NewCourseContext } from "../../../provider/new-course-provider";
import { RecommendCourseContext } from "../../../provider/recommend-course-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import ImageButton from "../../Common/image-button";
import ImageButtonItem from "../../Common/image-button-item";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionPaths from "./SectionPaths/section-paths";
import SectionSkills from "./SectionSkills/section-skills";

const Browse = (props) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const recommendCourseContext = useContext(RecommendCourseContext);
  const newCourseContext = useContext(NewCourseContext);
  const authorContext = useContext(AuthorContext);

  useEffect(() => {
    authorContext.getAuthor();
  }, []);

  const onPressNewReleases = () => {
    props.navigation.navigate(ScreenKey.ListAllCourse, {
      data: newCourseContext.state.data,
      title: "New Releases",
    });
  };
  const onPressRecommend = () => {
    props.navigation.navigate(ScreenKey.ListAllCourse, {
      data: recommendCourseContext.state.data,
      title: "Recommend For You",
    });
  };
  const dataCategory = [
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 2,
      title: "CERTIFICATIONS",
    },
    {
      id: 3,
      title: "<Software> DEVELOPMENT",
    },
    {
      id: 4,
      title: "IT OPS",
    },
  ];

  const renderItem = ({ item }) => (
    <ImageButtonItem
      title={language.newReleases}
      onPress={onPressNewReleases}
    />
  );

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <ImageButton title={language.newReleases} onPress={onPressNewReleases} />
      <ImageButton
        title={language.recommendedForYou}
        onPress={onPressRecommend}
      />

      <FlatList
        // style={styles.viewFlatList}
        horizontal={true}
        data={dataCategory}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <SectionSkills
        title="Popular Skill"
        dataSkills={dataSkills}
        navigation={props.navigation}
      /> */}
      {/* <SectionPaths title="Paths" navigation={props.navigation} /> */}
      {authorContext.state.isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <SectionAuthors
          title={language.topAuthors}
          navigation={props.navigation}
          authors={authorContext.state.data}
        />
      )}
    </ScrollView>
  );
};

export default Browse;

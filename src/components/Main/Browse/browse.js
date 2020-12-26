import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ScreenKey } from "../../../globals/constants";
import { AuthorContext } from "../../../provider/author-provider";
import { NewCourseContext } from "../../../provider/new-course-provider";
import { RecommendCourseContext } from "../../../provider/recommend-course-provider";
import ImageButton from "../../Common/image-button";
import ImageButtonItem from "../../Common/image-button-item";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionPaths from "./SectionPaths/section-paths";
import SectionSkills from "./SectionSkills/section-skills";

const Browse = (props) => {
  const recommendCourseContext = useContext(RecommendCourseContext);
  const newCourseContext = useContext(NewCourseContext);
  const authorContext = useContext(AuthorContext);

  useEffect(() => {
    authorContext.getAuthor();
  }, []);

  const onPressNewReleases = () => {
    props.navigation.navigate(ScreenKey.ListAllCourse, {
      data: newCourseContext.state.data,
    });
  };
  const onPressRecommend = () => {
    props.navigation.navigate(ScreenKey.ListAllCourse, {
      data: recommendCourseContext.state.data,
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
  const dataSkills = [
    {
      id: 1,
      title: "Angular",
    },
    {
      id: 2,
      title: "JavaScript",
    },
    {
      id: 3,
      title: "C#",
    },
    {
      id: 4,
      title: "Java",
    },
  ];
  const renderItem = ({ item }) => (
    <ImageButtonItem title="NEW RELEASES" onPress={onPressNewReleases} />
  );

  return (
    <ScrollView>
      <ImageButton title="NEW RELEASES" onPress={onPressNewReleases} />
      <ImageButton title="RECOMMENDED FOR YOU" onPress={onPressRecommend} />

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
          title="Top authors"
          navigation={props.navigation}
          authors={authorContext.state.data}
        />
      )}
    </ScrollView>
  );
};

export default Browse;

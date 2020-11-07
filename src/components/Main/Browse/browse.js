import React from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import ImageButton from "../../Common/image-button";
import ImageButtonItem from "../../Common/image-button-item";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionPaths from "./SectionPaths/section-paths";
import SectionSkills from "./SectionSkills/section-skills";

const Browse = (props) => {
  const onPressNewReleases = () => {
    console.log("onPressNewReleases");
  };
  const onPressRecommend = () => {
    console.log("onPressRecommend");
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
    <ImageButtonItem title="NEW RELEASES" onPress={onPressNewReleases()} />
  );

  return (
    <ScrollView>
      <ImageButton title="NEW RELEASES" onPress={onPressNewReleases()} />
      <ImageButton title="RECOMMENDED FOR YOU" onPress={onPressRecommend()} />

      <FlatList horizontal={true} data={dataCategory} renderItem={renderItem} />
      <SectionSkills title="Popular Skill" dataSkills={dataSkills}/>
      <SectionPaths title="Paths" />
      <SectionAuthors title="Top authors" />
    </ScrollView>
  );
};

export default Browse;

const styles = StyleSheet.create({});
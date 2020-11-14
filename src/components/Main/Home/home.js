import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import SectionCourses from "./SectionCourses/section-courses";

const Home = (props) => {
  const navigation = props.navigation;
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      // Prevent default behavior
      e.preventDefault();

      console.log("Default behavior prevented");
      navigation.goBack();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.view}>
      <View style={{ height: 200 }}></View>
      <SectionCourses title="Continue learning" navigation={navigation} />
      <SectionCourses title="Paths" navigation={navigation} />
      <SectionCourses title="Channels" navigation={navigation} />
      <SectionCourses title="Bookmarks" navigation={navigation} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    margin: 0,
  },
});

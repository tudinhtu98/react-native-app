import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScreenKey } from "../../../../globals/constants";
import { ThemeContext } from "../../../../provider/theme-provider";
import SectionPathsItem from "../SectionPathsItem/section-paths-item";

const SectionPaths = (props) => {
  const { theme } = useContext(ThemeContext);
  const categories = props.data || [];
  const onPressSectionPathsItem = (item) => {
    props.navigation.navigate(ScreenKey.PathDetail, {
      item,
      title: item.name,
    });
  };

  // const onPressSeeAll = () => {
  //   props.navigation.navigate(ScreenKey.ListPaths, {
  //     item: props.item,
  //   });
  // };

  const renderListItems = (categories) => {
    return categories.map((item) => (
      <SectionPathsItem
        key={item.id.toString()}
        item={item}
        navigation={props.navigation}
        onPressSectionPathsItem={onPressSectionPathsItem}
      />
    ));
  };
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={{ color: theme.foreground }}>{props.title}</Text>
        {/* <TouchableOpacity onPress={onPressSeeAll}>
          <Text>{`See all >`}</Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView horizontal={true}>{renderListItems(categories)}</ScrollView>
    </View>
  );
};

export default SectionPaths;

const styles = StyleSheet.create({
  titleView: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

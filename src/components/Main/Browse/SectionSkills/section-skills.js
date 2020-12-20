import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const SectionSkills = (props) => {
  const renderItemSkills = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log("press skill");
        }}
      >
        <View style={styles.skillView}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={{ margin: 5 }}>{props.title}</Text>
      <FlatList
        horizontal={true}
        data={props.dataSkills}
        renderItem={renderItemSkills}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SectionSkills;

const styles = StyleSheet.create({
  skillView: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
});

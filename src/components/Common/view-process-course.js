import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { convertHourToMin } from "../../core/utilities/date-time-utilities";
import { stylesGlo } from "../../globals/styles";

const ViewProcessCourse = (props) => {
  return (
    <View style={styles.view}>
      <View>
        <Text style={{ flexWrap: "wrap" }}>{props.item.courseTitle}</Text>
        <Text style={stylesGlo.textSmall}>{props.item.instructorName}</Text>
      </View>
      <Text style={stylesGlo.textSmall}>{`Learned: ${props.item.learnLesson}/${props.item.total} lesson`}</Text>
      <Text style={stylesGlo.textSmall}>{`Latest learn: ${new Date(
        props.item.latestLearnTime
      ).toDateString()}`}</Text>
    </View>
  );
};

export default ViewProcessCourse;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 5,
    paddingBottom: 5,
  },
  darkText: {
    color: "darkgray",
  },
});

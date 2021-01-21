import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { convertHourToMin } from "../../core/utilities/date-time-utilities";
import { stylesGlo } from "../../globals/styles";
import { ThemeContext } from "../../provider/theme-provider";

const ViewCourse = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.view}>
      <View>
        <Text style={{ flexWrap: "wrap", color: theme.foreground }}>
          {props.item.title}
        </Text>
        <Text style={stylesGlo.textSmall}>{props.item.subtitle}</Text>
      </View>
      <Text style={stylesGlo.textSmall}>{`${new Date(
        props.item.createdAt || props.item.updatedAt
      ).toDateString()} . ${convertHourToMin(
        props.item.totalHours || 0
      )} mins`}</Text>
    </View>
  );
};

export default ViewCourse;

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

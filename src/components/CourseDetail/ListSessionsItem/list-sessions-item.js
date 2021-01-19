import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { convertHourToMin } from "../../../core/utilities/date-time-utilities";
import { stylesGlo } from "../../../globals/styles";
import { ThemeContext } from "../../../provider/theme-provider";

const ListSessionsItem = (props) => {
  const { theme } = useContext(ThemeContext);

  const RenderSessionItem = (props) => {
    return props.data.map((item) => (
      <TouchableOpacity
        key={item.id.toString()}
        style={styles.viewSession}
        onPress={() => {
          // Alert.alert(`duration session: ${convertHourToMin(item.hours || 0)}`);
          props.setUriVideo(item.videoUrl);
        }}
      >
        <Text style={{ color: theme.foreground }}>{item.name}</Text>
        <Text style={{ color: theme.foreground }}>{`${convertHourToMin(
          item.hours || 0
        )} mins`}</Text>
      </TouchableOpacity>
    ));
  };
  return (
    <View>
      <View style={styles.view}>
        <View style={styles.viewNumberOrderSection}>
          <Text style={stylesGlo.textMedium}>
            {props.item.numberOrder || ""}
          </Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: theme.foreground }}>{props.item.name}</Text>
          <Text style={{ color: theme.foreground }}>{`${convertHourToMin(
            props.item.sumHours || 0
          )} mins`}</Text>
        </View>
        <View style={styles.dots}>
          <Menu>
            <MenuTrigger>
              <Icon name="dots-vertical" size={25} color="darkgray" />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption>
                <Text style={styles.textMenuOption}>Bookmark</Text>
              </MenuOption>
              <MenuOption>
                <Text style={styles.textMenuOption}>Download</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View>
        <RenderSessionItem
          data={props.item.lesson}
          setUriVideo={props.setUriVideo}
        />
      </View>
    </View>
  );
};

export default ListSessionsItem;

const styles = StyleSheet.create({
  view: { flexDirection: "row", paddingTop: 5 },
  viewSession: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  viewNumberOrderSection: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 50,
    backgroundColor: "lightgray",
  },
  dots: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    padding: 5,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  textMenuOption: {
    margin: 10,
  },
});

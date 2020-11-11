import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import ViewDotsVertical from "../../Common/view-dots-vertical";

const ListSessionsItem = (props) => {
  const RenderSessionItem = (props) => {
    return props.data.map((item) => (
      <TouchableOpacity
        style={styles.viewSession}
        onPress={() => {
          Alert.alert(`duration session: ${item.duration}`);
        }}
      >
        <Text>{item.title}</Text>
        <Text>{item.duration}</Text>
      </TouchableOpacity>
    ));
  };
  return (
    <View>
      <View style={styles.view}>
        <View style={{ width: 70, height: 50, backgroundColor: "gray" }}></View>
        <View style={{ marginLeft: 10 }}>
          <Text>{props.item.title}</Text>
          <Text style={{ marginHorizontal: 20 }}>{props.item.duration}</Text>
        </View>
        <View style={styles.dots}>
          <ViewDotsVertical
            onPress={() => alert("Pressed Dots!")}
            color="black"
          />
        </View>
      </View>
      <View>
        <RenderSessionItem data={props.item.data} />
      </View>
    </View>
  );
};

export default ListSessionsItem;

const styles = StyleSheet.create({
  view: { flexDirection: "row", margin: 10 },
  viewSession: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
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
});

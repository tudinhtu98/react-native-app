import { StyleSheet } from "react-native";

export const stylesGlo = StyleSheet.create({
  textBlue: {
    color: "blue",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textSmall: {
    fontSize: 10,
    color: "gray",
  },
  textSuccess: {
    color: "green",
  }, 
  textDanger: {
    color: "red",
  }, 
  emptyCourses: {
    margin: 10,
    color: "lightseagreen",
    fontSize: 15,
    fontWeight: "bold",
  }
});

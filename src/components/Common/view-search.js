import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ScreenKey } from "../../globals/constants";
import { AuthenticationContext } from "../../provider/authentication-provider";
import { SearchContext } from "../../provider/search-provider";
import { ThemeContext } from "../../provider/theme-provider";

const ViewSearch = (props) => {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(AuthenticationContext);
  const { search } = useContext(SearchContext);
  const [keyword, setKeyword] = useState("");

  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        style={{ ...styles.border, color: theme.foreground }}
        placeholder="Search text"
        placeholderTextColor="gray"
        autoFocus={true}
        onChangeText={(keyword) => setKeyword(keyword)}
      />
      <TouchableOpacity
        style={styles.buttonSearch}
        onPress={() => {
          search(keyword, state.token, 20, 0);
          props.navigation.navigate(ScreenKey.SearchResultTab, {
            keyword: keyword,
          });
        }}
      >
        <Text style={{ color: "white" }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewSearch;

const styles = StyleSheet.create({
  border: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
  },
  buttonSearch: {
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "deepskyblue",
    backgroundColor: "deepskyblue",
    padding: 10,
  },
});

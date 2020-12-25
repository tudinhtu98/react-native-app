import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  LogBox,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ViewSearch from "../../Common/view-search";
import { apiSearchHistory } from "../../../core/services/search-service";
import { useContext } from "react/cjs/react.development";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { SearchContext } from "../../../provider/search-provider";
import { ScreenKey } from "../../../globals/constants";

const Search = (props) => {
  const { state } = useContext(AuthenticationContext);
  const { search } = useContext(SearchContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const onRefreshHistorySearch = () => {
    callAPISearchHistory();
  };

  const onPressHistorySearch = (item) => {
    search(item.content, state.token, 20, 0);
    props.navigation.navigate(ScreenKey.SearchResultTab, {
      keyword: item.content,
    });
  };

  const renderItemHistorySearch = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressHistorySearch(item);
        }}
      >
        <View style={styles.viewItem}>
          <Icon
            style={styles.icon}
            name="history"
            size={25}
            color={props.color}
          />
          <Text>{item.content}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const callAPISearchHistory = () => {
    apiSearchHistory(state.token)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.payload.data);
        } else {
          throw new Error(err);
        }
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    callAPISearchHistory();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <ViewSearch navigation={props.navigation} />
      <View style={styles.viewTop}>
        <Text>Recent searchs</Text>
        {/* <TouchableOpacity onPress={() => Alert.alert("onPress Clear all")}>
          <Text style={styles.buttonClear}>CLEAR ALL</Text>
        </TouchableOpacity> */}
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => renderItemHistorySearch(item)}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={onRefreshHistorySearch}
              />
            }
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  scrollView: {
    margin: 5,
  },
  viewTop: {
    flexDirection: "row",
    margin: 5,
    marginTop: 20,
    justifyContent: "space-between",
  },
  viewItem: {
    flexDirection: "row",
    margin: 5,
  },
  icon: {
    marginRight: 10,
  },
  buttonClear: {
    color: "blue",
  },
});

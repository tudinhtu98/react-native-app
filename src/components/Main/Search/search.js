import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
  LogBox,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ViewSearch from "../../Common/view-search";
import {
  apiDeleteHistory,
  apiSearchHistory,
} from "../../../core/services/search-service";
import { useContext } from "react/cjs/react.development";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { SearchContext } from "../../../provider/search-provider";
import { ScreenKey } from "../../../globals/constants";
import { ThemeContext } from "../../../provider/theme-provider";
import { LanguageContext } from "../../../provider/language-provider";

const Search = (props) => {
  const { state } = useContext(AuthenticationContext);
  const { search } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    callAPISearchHistory();
  }, []);

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

  const onRefreshHistorySearch = () => {
    callAPISearchHistory();
  };

  const onPressHistorySearch = (item) => {
    search(item.content, state.token, 20, 0);
    props.navigation.navigate(ScreenKey.SearchResultTab, {
      keyword: item.content,
    });
  };

  const onPressDeleteHistorySearch = (historyId) => {
    apiDeleteHistory(state.token, historyId)
      .then(() => {
        callAPISearchHistory();
      })
      .catch((err) => {
        console.log("Delete history failed", err);
      });
  };

  const renderItemHistorySearch = (item) => {
    return (
      <View style={styles.viewHistoryItem}>
        <View style={styles.viewItem}>
          <TouchableOpacity
            onPress={() => {
              onPressDeleteHistorySearch(item.id);
            }}
          >
            <Icon
              style={{ ...styles.icon, color: theme.foreground }}
              name="delete-outline"
              size={25}
              color={props.color}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            onPressHistorySearch(item);
          }}
        >
          <View style={styles.viewItem}>
            <Icon
              style={{ ...styles.icon, color: theme.foreground }}
              name="history"
              size={25}
              color={props.color}
            />
            <Text style={{ color: theme.foreground }}>{item.content}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{ height: "100%", padding: 5, backgroundColor: theme.background }}
    >
      <ViewSearch navigation={props.navigation} />
      <View style={styles.viewTop}>
        <Text style={{ color: theme.foreground }}>
          {language.recentSearchs}
        </Text>
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
    </View>
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
  viewHistoryItem: {
    margin: 5,
    flexDirection: "row",
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

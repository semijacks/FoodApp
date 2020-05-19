import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultsDetail from "../components/ResultsDetail";

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }

  if (results < 1) {
    return (
      <ActivityIndicator style={styles.activityIndicatorStyle} size="large" />
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ResultsShow", { id: item.id })
                }
              >
                <ResultsDetail result={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    fontFamily: "Roboto-Bold",
  },
  container: {
    marginBottom: 10,
  },
  activityIndicatorStyle: {
    top: 50,
    left: 50,
  },
});

export default ResultsList;

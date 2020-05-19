import React from "react";
import { View, Image, Text, StyleSheet, ActivityIndicator } from "react-native";

const ResultsDetail = ({ result }) => {
  if (result === []) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.otherDetailsStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontFamily: "Roboto-Bold",
  },
  otherDetailsStyle: {
    fontFamily: "Roboto-Regular",
  },
});

export default ResultsDetail;

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={searchTerm}
        onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        onSearchTermSubmit={() => console.log("term was submitted")}
      />
      <Text>Hello from Search Screen</Text>
      <Text>{searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

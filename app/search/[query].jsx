import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();

  return (
    <View>
      <Text style={{ color: "white", fontSize: 20 }}>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});

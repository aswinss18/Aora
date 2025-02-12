import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";

const Trending = ({ posts }) => {
  return (
    <FlatList
      horizontal
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <Text style={styles.text}>{item.id}</Text>}
    />
  );
};

export default Trending;

const styles = StyleSheet.create({ text: { color: "white", fontSize: 20 } });

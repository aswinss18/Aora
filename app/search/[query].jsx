import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import VideoCard from "../../components/VideoCard";
import { StatusBar } from "expo-status-bar";
import EmptyState from "../../components/EmptyState";
import { getAllPosts, getLatestPosts, searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();

  const {
    data: posts,
    isLoading,
    refetch,
  } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="light" />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={styles.headerSubContainer}>
                <Text style={styles.welcomeText}>Search results</Text>
                <Text style={styles.nameText}>{query}</Text>
              </View>
            </View>
            <SearchInput initialQuery={query} />
          </View>
        )}
        ListEmptyComponent={({ item }) => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query "
          />
        )}
      />{" "}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  text: { fontSize: 20, color: "white" },
  mainContainer: { backgroundColor: "#161622", height: "100%" },
  headerContainer: {
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  headerSubContainer: {
    marginBottom: 40,
  },
  welcomeText: { color: "white" },
  nameText: { color: "white", fontSize: 22, fontWeight: 600 },
  imgContainer: { marginTop: 10 },
  img: { width: 40, height: 40 },
});

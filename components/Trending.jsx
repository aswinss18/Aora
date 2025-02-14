import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, memo } from "react";
import { FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
import { icons } from "../constants";
import { ResizeMode, Video } from "expo-av";

const zoomIn = { 0: { scale: 0.95 }, 1: { scale: 1 } };
const zoomOut = { 0: { scale: 1 }, 1: { scale: 0.95 } };

// Memoizing to avoid unnecessary re-renders
const TrendingItem = memo(({ item, activeItem }) => {
  const [play, setPlay] = useState(false);
  const isActive = activeItem === item?.$id;

  return (
    <Animatable.View
      animation={isActive ? zoomIn : zoomOut}
      duration={500}
      style={{ marginRight: 10 }}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          style={{
            width: 160,
            height: 240,
            borderRadius: 34,
            overflow: "hidden",
            marginVertical: 30,
          }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) setPlay(false);
          }}
        />
      ) : (
        <TouchableOpacity
          onPress={() => setPlay(true)}
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            style={{
              width: 160,
              height: 240,
              borderRadius: 34,
              overflow: "hidden",
              marginVertical: 30,
            }}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            style={{ position: "absolute", width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
});

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(null);
  const viewableItemsChange = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  useEffect(() => {
    if (posts.length > 0) {
      setActiveItem(posts[1]); // Set only once when posts change
    }
  }, [posts]); // Only update when `posts` change

  return (
    <FlatList
      onViewableItemsChanged={viewableItemsChange}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      horizontal
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
    />
  );
};

export default Trending;

const styles = StyleSheet.create({ text: { color: "white", fontSize: 20 } });

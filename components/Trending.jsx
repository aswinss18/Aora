import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState, memo } from "react";
import * as Animatable from "react-native-animatable";
import { WebView } from "react-native-webview"; // ✅ Correct import
import { icons } from "../constants"; // 🔍 Ensure icons is correctly imported

const zoomIn = { 0: { scale: 0.95 }, 1: { scale: 1 } };
const zoomOut = { 0: { scale: 1 }, 1: { scale: 0.95 } };

// Memoized to avoid unnecessary re-renders
const TrendingItem = memo(({ item, activeItem }) => {
  const [play, setPlay] = useState(false);
  const isActive = activeItem === item?.$id;

  return (
    <Animatable.View
      animation={isActive ? zoomIn : zoomOut}
      duration={500}
      style={{
        marginRight: 10,
      }}
    >
      {play ? (
        <WebView
          source={{
            uri: item.video,
          }}
          style={styles.video}
          allowsFullscreenVideo
        />
      ) : (
        <TouchableOpacity
          onPress={() => setPlay(true)}
          style={styles.touchable}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            onPress={() => setPlay(true)}
            style={styles.playIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
});

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(
    posts.length > 0 ? posts[0].$id : null
  );

  const viewableItemsChange = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      onViewableItemsChanged={viewableItemsChange}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      horizontal
      data={posts}
      keyExtractor={(item) => item.$id || Math.random().toString()}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
    />
  );
};

export default Trending;

const styles = StyleSheet.create({
  video: {
    width: 180,
    height: 240,
    borderRadius: 34,
    overflow: "hidden",
    marginVertical: 30,
    backgroundColor: "black",
  },
  touchable: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    width: 160,
    height: 240,
    borderRadius: 34,
    overflow: "hidden",
    marginVertical: 30,
  },
  playIcon: {
    position: "absolute",
    width: 30,
    height: 30,
  },
});

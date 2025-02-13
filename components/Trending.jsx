import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
import { icons } from "../constants";

const zoomIn = { 0: { scale: 0.9 }, 1: { scale: 1 } };

const zoomOut = { 0: { scale: 1 }, 1: { scale: 0.9 } };

const TrendingItem = ({ item, activeItem }) => {
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
      duration={500}
      style={{ marginRight: 10 }}
    >
      {play ? (
        <Text>playing...</Text>
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
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[1]);

  return (
    <FlatList
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

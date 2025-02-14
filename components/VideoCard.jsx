import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons, images } from "../constants";
import WebView from "react-native-webview";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);

  return (
    <View style={styles.container}>
      {/* Video Info */}
      <View style={styles.view1}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Image
              source={{ uri: avatar }} // ✅ Corrected Source
              style={styles.img}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.username} numberOfLines={1}>
              {username}
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Image
            source={icons.menu}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Thumbnail or Video */}
      {!play ? (
        <TouchableOpacity
          onPress={() => setPlay(true)}
          activeOpacity={0.7}
          style={styles.thumbnailContainer}
        >
          <Image
            source={{ uri: thumbnail }} // ✅ Fixed thumbnail
            style={styles.thumbnail}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            style={styles.playIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <WebView
          source={{ uri: video }}
          style={styles.video}
          allowsFullscreenVideo
        />
      )}
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: { alignItems: "center", paddingHorizontal: 20, marginBottom: 50 },
  title: { color: "white", fontSize: 14 },
  username: { fontSize: 12, color: "#cccccc" },
  textContainer: { justifyContent: "center", flex: 1, marginLeft: 10, gap: 10 },
  view1: { flexDirection: "row", gap: 10, alignItems: "flex-start" },
  view2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  view3: {
    width: 46,
    height: 46,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "orange",
  },
  img: { height: "100%", width: "100%" },

  // ✅ Fixed Thumbnail Style
  thumbnailContainer: {
    width: "100%",
    height: 200,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  playIcon: {
    width: 30,
    height: 30,
    position: "absolute",
  },

  video: {
    width: 380,
    height: 200,
    borderRadius: 12,
    marginVertical: 30,
    backgroundColor: "black",
  },
});

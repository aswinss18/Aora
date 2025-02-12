import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons, images } from "../constants";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    prompt,
    creator: { username, avatar },
  },
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Image
              source={images.logo}
              style={thumbnail}
              alt="image"
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              marginLeft: 10,
              gap: 10,
            }}
          >
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={{ fontSize: 12, color: "#cccccc" }} numberOfLines={1}>
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
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: { alignItems: "center", paddingHorizontal: 20, marginBottom: 50 },
  title: { color: "white", fontSize: 14 },
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
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 10,
  },
  img: { height: "100%", width: "100%" },
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
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
  const [play, setPlay] = useState(false);

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
      {!play ? (
        <Text style={{ color: "white" }}>Playing</Text>
      ) : (
        <TouchableOpacity
          onPress={() => setPlay(!play)}
          activeOpacity={0.7}
          style={{
            width: "100%",
            height: 200,
            marginTop: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: thumbnail }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 12,
              marginTop: 20,
            }}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            style={{
              width: 30,
              height: 30,
              borderRadius: 12,
              marginTop: 20,
              position: "absolute",
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
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

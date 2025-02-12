import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../constants";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.img} source={images.empty} />
      <Text style={styles.title}>{subtitle}</Text>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  img: { width: 270, height: 270 },
  title: { fontSize: 16, fontWeight: 500, color: "#cccccc" },
  subtitle: { fontSize: 14, fontWeight: 600, color: "white" },
});

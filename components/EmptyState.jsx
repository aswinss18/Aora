import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  const router = useRouter();
  return (
    <View style={styles.view}>
      <Image style={styles.img} source={images.empty} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <CustomButton
        title="Create video"
        handlePress={() => {
          router.push("/sign-in");
        }}
        containerStyles={{ width: "100%", marginVertical: 20 }}
      />
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
  title: { fontSize: 18, fontWeight: 700, color: "white" },
  subtitle: { fontSize: 14, fontWeight: 500, color: "#cccccc" },
});

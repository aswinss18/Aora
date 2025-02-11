import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";
import CustomButton from "../components/CustomButton";
import { Redirect, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const { isLoading, isLoggedIn, user } = useGlobalContext();

  console.log(isLoggedIn);
  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.view}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            style={styles.cards}
            resizeMode="contain"
          />
          <View style={styles.textView}>
            <Text style={styles.text}>
              Discover Endless Possibilities with{" "}
              <Text style={{ color: "orange" }}>Aora</Text>
              <Image
                source={images.path}
                style={{
                  width: 136,
                  height: 15,
                  position: "absolute",
                  bottom: -2,
                  right: -8,
                }}
                resizeMode="contain"
              />
            </Text>
          </View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
              paddingHorizontal: 20,
            }}
          >
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora.
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles={{ width: "90%", marginTop: 30 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: 700,
    textAlign: "center",
    paddingHorizontal: 75,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#161622",
  },
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 750,
  },
  logo: { width: 130, height: 84 },
  cards: { width: 380, height: 300 },
  textView: { position: "relative", marginTop: 5 },
});

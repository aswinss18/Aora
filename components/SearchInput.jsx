import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { usePathname, useRouter } from "expo-router";
import { Alert } from "react-native";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <View style={{ borderRadius: 12 }}>
      <TouchableOpacity
        style={styles.view} // Apply the view styles directly
        activeOpacity={0.7} // Controls opacity when clicked for the active effect
      >
        <View style={styles.innerView}>
          <TextInput
            style={styles.input}
            value={query}
            placeholder="Search for a video topic"
            placeholderTextColor="#cdcde0"
            onChangeText={(e) => setQuery(e)}
          />

          <TouchableOpacity
            onPress={() => {
              if (!query) {
                return Alert.alert(
                  "Missing query",
                  "Please input something to search results across database"
                );
              }
              if (pathname.startsWith("/search")) {
                router.setParams({ query });
              } else router.push(`/search/${query}`);
            }}
          >
            <Image
              source={icons.search}
              style={styles.passwordEye}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
const styles = StyleSheet.create({
  container: { gap: 10 },
  headingText: { color: "#cccccc", fontWeight: "500" },
  view: {
    backgroundColor: "#2c2c41",
    width: "100%",
    height: 50,

    borderRadius: 12,
  },
  innerView: {
    flexDirection: "row",
    width: "97%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  passwordEye: { width: 24, height: 24 },
  input: { flex: 1, color: "white" },
});

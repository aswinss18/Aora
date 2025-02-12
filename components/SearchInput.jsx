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

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ borderRadius: 12 }}>
      <TouchableOpacity
        style={styles.view} // Apply the view styles directly
        activeOpacity={0.7} // Controls opacity when clicked for the active effect
      >
        <View style={styles.innerView}>
          <TextInput
            style={styles.input}
            value={value}
            placeholder="Search for a video topic"
            placeholderTextColor="#cccccc"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
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

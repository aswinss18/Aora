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

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ ...styles.container, ...otherStyles }}>
      <Text style={styles.headingText}>{title}</Text>
      <TouchableOpacity
        style={styles.view} // Apply the view styles directly
        activeOpacity={0.7} // Controls opacity when clicked for the active effect
      >
        <View style={styles.innerView}>
          <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#cccccc"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
          />
          {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                style={styles.passwordEye}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormField;
const styles = StyleSheet.create({
  container: { gap: 10 },
  headingText: { color: "#cccccc", fontWeight: "500" },
  view: {
    backgroundColor: "#2c2c41",
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderColor: "#a72154",
    borderRadius: 12,
  },
  innerView: {
    flexDirection: "row",
    width: "97%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  passwordEye: { width: 24, height: 24 },
});

import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={handlePress}
      activeOpacity={0.7}
      style={{
        backgroundColor: "orange",
        borderRadius: 12,
        height: 62,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...containerStyles,
        opacity: `${isLoading ? 0.5 : 1}`,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "#161622",
          fontWeight: 600,
          ...textStyles,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

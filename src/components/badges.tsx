import { View, Text, TextStyle } from "react-native";
import React from "react";
interface PostBadgeProps {
  textStyle?: TextStyle;
  children: React.ReactNode;
}
const PostBadge: React.FC<PostBadgeProps> = ({ children, textStyle }) => {
  return (
    <Text
      style={{
        backgroundColor: "#0196f4",
        paddingHorizontal: 5,
        paddingVertical: 5,
        fontSize: 18,
        ...textStyle,
      }}
    >
      {children}
    </Text>
  );
};

export { PostBadge };

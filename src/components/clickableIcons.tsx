import { Text, TouchableOpacity } from "react-native";
import React from "react";
interface ClickAbleIcon {
  children?: React.ReactNode;
  styles?: object;
  handler?: () => void;
}
const ClickableIcons: React.FC<ClickAbleIcon> = ({
  children,
  styles,
  handler,
}) => {
  return (
    <TouchableOpacity
      onPress={handler}
      style={{
        height: 35,
        width: 35,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 6,
        ...styles,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export { ClickableIcons };

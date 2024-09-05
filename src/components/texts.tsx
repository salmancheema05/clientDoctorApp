import { TextStyle, Text } from "react-native";
import React from "react";
import { DefaultTouchableOpacity } from "./touchableOpacity";
import { useTheme } from "../theme/context";

interface TextProps {
  styles?: TextStyle;
  handler?: () => void;
  children?: React.ReactNode;
}

const DefaultText: React.FC<TextProps> = ({
  children,
  handler = null,
  styles,
}) => {
  const theme = useTheme();
  const renderText = () => {
    return (
      <Text
        style={{
          fontSize: 14,
          fontWeight: "300",
          color: theme.primary.light,
          ...styles,
        }}
      >
        {children}
      </Text>
    );
  };
  return handler ? (
    <DefaultTouchableOpacity handler={handler}>
      {renderText()}
    </DefaultTouchableOpacity>
  ) : (
    renderText()
  );
};

export { DefaultText };

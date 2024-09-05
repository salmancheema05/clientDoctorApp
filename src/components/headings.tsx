import { TextStyle, Text, View } from "react-native";
import React from "react";
import { DefaultTouchableOpacity } from "./touchableOpacity";
import { DefaultText } from "./texts";
import { useTheme } from "../theme/context";

interface TextProps {
  styles?: TextStyle;
  children?: React.ReactNode;
  handler?: () => void;
}
interface titleProps {
  tag?: string;
  title?: string;
  styles?: TextStyle;
  handler?: () => void;
}
const DefaultHeading: React.FC<TextProps> = ({
  children,
  handler = null,
  styles,
}) => {
  const theme = useTheme();
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: "800",
        color: theme.primary.dark,
        ...styles,
      }}
      onPress={handler}
    >
      {children}
    </Text>
  );
};
const SubHeading: React.FC<TextProps> = ({
  children,
  handler = null,
  styles,
}) => {
  const theme = useTheme();
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: "900",
        color: theme.primary.dark,
        ...styles,
      }}
      onPress={handler}
    >
      {children}
    </Text>
  );
};

const DefaultTitleWithLink: React.FC<titleProps> = ({
  handler = null,
  title,
  styles,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <SubHeading>{title}</SubHeading>
      <DefaultTouchableOpacity handler={handler}>
        <DefaultText>See All</DefaultText>
      </DefaultTouchableOpacity>
    </View>
  );
};

export { DefaultHeading, DefaultTitleWithLink, SubHeading };

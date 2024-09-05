import { TouchableOpacity, View, ViewStyle, StyleProp } from "react-native";
import React from "react";
interface TouchableOpacityProps {
  styles?: object;
  handler?: () => void;
  children?: React.ReactNode;
}
const DefaultTouchableOpacity: React.FC<TouchableOpacityProps> = ({
  children,
  handler = null,
  styles,
}) => {
  return handler != null ? (
    <TouchableOpacity onPress={handler} style={styles}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={styles}>{children}</View>
  );
};

export { DefaultTouchableOpacity };

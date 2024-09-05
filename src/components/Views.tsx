import React from "react";
import { View, ViewStyle } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { DefaultHeading } from "./headings";
import { LeftArrow } from "./icons";
import { useTheme } from "../theme/context";

interface ViewProps {
  styles?: ViewStyle;
  title?: string;
  children?: React.ReactNode;
}

const DefaultView: React.FC<ViewProps> = ({ children, styles }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.primary.bg,
        paddingHorizontal: wp(6),
        marginTop: hp(3),
        paddingBottom: hp(3),
        ...styles,
      }}
    >
      {children}
    </View>
  );
};
const DefaultGrid: React.FC<ViewProps> = ({ children, styles }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: wp(2),
        paddingVertical: hp(2),
        ...styles,
      }}
    >
      {children}
    </View>
  );
};

const DefaultSection: React.FC<ViewProps> = ({ children, styles }) => {
  return (
    <View
      style={{
        marginTop: hp(2),
        ...styles,
      }}
    >
      {children}
    </View>
  );
};

const Header: React.FC<ViewProps> = ({ title, styles }) => {
  const theme = useTheme();
  return (
    <View style={{ height: hp(6), flexDirection: "row" }}>
      <View
        style={{
          height: hp(8),
          width: "10%",
          justifyContent: "center",
        }}
      >
        <LeftArrow color={theme.primary.iconColor} />
      </View>
      <View
        style={{
          height: hp(8),
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DefaultHeading>{title}</DefaultHeading>
      </View>
    </View>
  );
};

export { DefaultView, DefaultGrid, DefaultSection, Header };

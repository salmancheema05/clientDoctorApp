import React from "react";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultGrid } from "../../../components/Views";
import { DefaultHeading, SubHeading } from "../../../components/headings";
import { DefaultText } from "../../../components/texts";
import { useTheme } from "../../../theme/context";

const Experience = () => {
  const theme = useTheme();
  return (
    <DefaultGrid>
      <View
        style={{
          backgroundColor: theme.primary.bg,
          shadowColor: theme.primary.shadowColor,
          elevation: 3,
          marginTop: hp(3),
          paddingHorizontal: wp(3),
          paddingVertical: wp(5),
          width: "45%",
          marginRight: wp(4),
          alignItems: "center",
        }}
      >
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          1971-2024
        </DefaultHeading>
        <SubHeading styles={{ marginBottom: hp(1) }}>Position</SubHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Hospital Name
        </DefaultText>
      </View>
      <View
        style={{
          backgroundColor: theme.primary.bg,
          shadowColor: theme.primary.shadowColor,
          elevation: 3,
          marginTop: hp(3),
          paddingHorizontal: wp(3),
          paddingVertical: wp(5),
          width: "45%",
          marginRight: wp(4),
          alignItems: "center",
        }}
      >
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          1971-2024
        </DefaultHeading>
        <SubHeading styles={{ marginBottom: hp(1) }}>Position</SubHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Hospital Name
        </DefaultText>
      </View>
      <View
        style={{
          backgroundColor: theme.primary.bg,
          shadowColor: theme.primary.shadowColor,
          elevation: 3,
          marginTop: hp(3),
          paddingHorizontal: wp(3),
          paddingVertical: wp(5),
          width: "45%",
          marginRight: wp(4),
          alignItems: "center",
        }}
      >
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          1971-2024
        </DefaultHeading>
        <SubHeading styles={{ marginBottom: hp(1) }}>Position</SubHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Hospital Name
        </DefaultText>
      </View>
      <View
        style={{
          backgroundColor: theme.primary.bg,
          shadowColor: theme.primary.shadowColor,
          elevation: 3,
          marginTop: hp(3),
          paddingHorizontal: wp(3),
          paddingVertical: wp(5),
          width: "45%",
          marginRight: wp(4),
          alignItems: "center",
        }}
      >
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          1971-2024
        </DefaultHeading>
        <SubHeading styles={{ marginBottom: hp(1) }}>Position</SubHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Hospital Name
        </DefaultText>
      </View>
    </DefaultGrid>
  );
};

export default Experience;

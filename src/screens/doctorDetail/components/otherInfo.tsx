import React from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultSection } from "../../../components/Views";
import { useTheme } from "../../../theme/context";
import { Chat, Clock, PatientIcon, Star } from "../../../components/icons";
import { SubHeading } from "../../../components/headings";
import { DefaultText } from "../../../components/texts";

const OtherInfo = () => {
  const theme = useTheme();
  return (
    <DefaultSection>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <View
            style={{
              backgroundColor: theme.primary.circleBg,
              width: wp(16),
              height: wp(16),
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PatientIcon color={theme.primary.iconColor} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: hp(2),
            }}
          >
            <SubHeading>1000 +</SubHeading>
            <DefaultText>patients</DefaultText>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: theme.primary.circleBg,
              width: wp(16),
              height: wp(16),
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Clock color={theme.primary.iconColor} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: hp(2),
            }}
          >
            <SubHeading>10 +</SubHeading>
            <DefaultText>experience</DefaultText>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: theme.primary.circleBg,
              width: wp(16),
              height: wp(16),
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Star color={theme.primary.iconColor} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: hp(2),
            }}
          >
            <SubHeading>5</SubHeading>
            <DefaultText>rating</DefaultText>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: theme.primary.circleBg,
              width: wp(16),
              height: wp(16),
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Chat color={theme.primary.iconColor} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: hp(2),
            }}
          >
            <SubHeading>1000</SubHeading>
            <DefaultText>reviews</DefaultText>
          </View>
        </View>
      </View>
    </DefaultSection>
  );
};

export default OtherInfo;

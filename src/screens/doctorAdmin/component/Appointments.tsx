import React from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultHeading } from "../../../components/headings";
import { DefaultText } from "../../../components/texts";
import { DefaultImage } from "../../../components/images";
import { DefaultSection } from "../../../components/Views";
import { useTheme } from "../../../theme/context";
const Appointments = () => {
  const theme = useTheme();
  return (
    <DefaultSection>
      <View
        style={{
          backgroundColor: theme.primary.bg,
          shadowColor: theme.primary.shadowColor,
          elevation: 3,
          width: "96%",
          height: hp(16),
          marginBottom: hp(2),
          flexDirection: "row",
          marginHorizontal: wp(2),
        }}
      >
        <View
          style={{
            marginHorizontal: wp(1),
            marginVertical: wp(1),
            width: wp(22),
            height: hp(15),
          }}
        >
          <DefaultImage
            source={require("../../../images/doctorimage2.jpg")}
            styles={{ width: 80, height: 110 }}
          />
        </View>
        <View
          style={{
            width: wp(63),
            height: hp(11),
            marginTop: hp(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DefaultHeading>Farooq khan</DefaultHeading>
          </View>
          <View
            style={{
              width: wp(63),
              height: hp(7),
              marginTop: hp(1),
            }}
          >
            <DefaultText>0000000000</DefaultText>
            <DefaultText styles={{ marginTop: hp(1) }}>
              Mar 20 2024,10:00 am
            </DefaultText>
          </View>
        </View>
      </View>
    </DefaultSection>
  );
};

export default Appointments;

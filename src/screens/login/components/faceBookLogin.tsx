import React from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SubHeading } from "../../../components/headings";
import { DefaultImage } from "../../../components/images";
import { facebook } from "../../../importAllImages";

const FaceBookLogin = () => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        width: "100%",
        height: hp(7),
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        marginTop: hp(2),
      }}
    >
      <View
        style={{
          width: "30%",
          alignItems: "flex-end",
          height: hp(4),
          justifyContent: "center",
        }}
      >
        <DefaultImage
          source={facebook}
          styles={{ width: wp(5), height: hp(3) }}
        />
      </View>
      <View
        style={{
          width: "70%",
          height: hp(4),
          justifyContent: "center",
          paddingHorizontal: wp(3),
        }}
      >
        <SubHeading>Sign In with Facebook</SubHeading>
      </View>
    </View>
  );
};

export default FaceBookLogin;

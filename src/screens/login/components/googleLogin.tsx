import React, { useEffect } from "react";
import { View, Platform } from "react-native";
import { DefaultImage } from "../../../components/images";
import { google } from "../../../importAllImages";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SubHeading } from "../../../components/headings";
import { DefaultTouchableOpacity } from "../../../components/touchableOpacity";
// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
WebBrowser.maybeCompleteAuthSession();
const GoogleLogin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "30957245973-2csf86i3l4n2n8hbk2pv0lbab19ulp61.apps.googleusercontent.com",
    webClientId:
      "30957245973-ph3eud8dg7e0qv875fjfiqiklto0jbo8.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);
  return (
    <DefaultTouchableOpacity
      handler={() => promptAsync()}
      styles={{
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
          source={google}
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
        <SubHeading>Sign In with Google</SubHeading>
      </View>
    </DefaultTouchableOpacity>
  );
};

export default GoogleLogin;

import React from "react";
import { View } from "react-native";
import { DefaultSection, DefaultView } from "../../components/Views";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { logo } from "../../importAllImages";
import { DefaultImage } from "../../components/images";
import { DefaultHeading, SubHeading } from "../../components/headings";
import { useUserLoginMutation } from "../../api/userLogin";
import { NavigationType } from "../../types/navigationType";
import LoginFom from "./components/loginFom";
import GoogleLogin from "./components/googleLogin";
import FaceBookLogin from "./components/faceBookLogin";

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const navigation: NavigationType = useNavigation();
  return (
    <DefaultView>
      <View style={{ marginTop: hp(5), alignItems: "center" }}>
        <DefaultImage
          source={logo}
          styles={{ width: wp(20), height: hp(10) }}
        />
        <DefaultHeading styles={{ fontSize: 20, marginTop: hp(3) }}>
          HealthPal
        </DefaultHeading>
      </View>
      <LoginFom />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            borderBottomWidth: 0.5,
            width: "46%",
            height: hp(5),
          }}
        ></View>
        <DefaultHeading
          styles={{ position: "absolute", top: hp(3.3), left: wp(42) }}
        >
          or
        </DefaultHeading>
        <View
          style={{ borderBottomWidth: 0.5, width: "46%", height: hp(5) }}
        ></View>
      </View>
      <DefaultSection>
        <GoogleLogin />
        <FaceBookLogin />
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: wp(3),
            marginTop: hp(3),
          }}
        >
          <SubHeading styles={{ color: "hsla(220, 88%, 65%, 1)" }}>
            Forgot Password?
          </SubHeading>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: wp(3),
            marginTop: hp(3),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <SubHeading styles={{ marginRight: wp(1) }}>
              Don't have an account yet?
            </SubHeading>
            <SubHeading
              styles={{ color: "hsla(220, 88%, 65%, 1)" }}
              handler={() => navigation.navigate("Signup")}
            >
              Sign up
            </SubHeading>
          </View>
        </View>
      </DefaultSection>
    </DefaultView>
  );
};

export default Login;

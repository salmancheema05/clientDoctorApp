import React, { useState } from "react";
import { View, Alert } from "react-native";
import { DefaultSection, DefaultView } from "../../components/Views";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultButton } from "../../components/buttons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { DefaultTextInput } from "../../components/textinputs";
import { Email, UnLock } from "../../components/icons";
import { google, logo, facebook } from "../../importAllImages";
import { DefaultImage } from "../../components/images";
import { DefaultHeading, SubHeading } from "../../components/headings";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/dispatchAndSelector";
import { useUserLoginMutation } from "../../api/userLogin";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "jsonwebtoken";
import { userData } from "../../redux/AuthSlice";
import { NavigationType } from "../../types/navigationType";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
interface InputState {
  email: string;
  password: string;
}
interface JwtPayloadType extends JwtPayload {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    user_status: string;
  };
}

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const dispatch = useAppDispatch();
  const navigation: NavigationType = useNavigation();
  const [inputValue, setInputValue] = useState<InputState>({
    email: "",
    password: "",
  });
  const handleInputChange = (name: keyof InputState, value: string) => {
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handlerLogin = async () => {
    if (inputValue.email === "") {
      Alert.alert("required email");
    } else if (inputValue.password === "") {
      Alert.alert("required password");
    } else {
      const res = await userLogin(inputValue);
      const wrongInformation = (res.error as FetchBaseQueryError)?.data as {
        error: string;
      };
      const errorStatus = (res.error as FetchBaseQueryError)?.status;
      if (errorStatus === 404) {
        Alert.alert(wrongInformation.error);
      } else {
        const decoded = jwtDecode<JwtPayloadType>(res.data.message);
        const userObject = {
          id: decoded.user.id,
          first_name: decoded.user.first_name,
          last_name: decoded.user.last_name,
          user_status: decoded.user.user_status,
          token: res.data.message,
          refresh_token: res.data.refreshtoken,
        };
        const response = await dispatch(userData(userObject));
        if (response.payload.user_status === "doctor") {
          navigation.navigate("DoctorAdmin");
        } else if (response.payload.user_status === "patient") {
          navigation.navigate("PatientAdmin");
        }
      }
    }
  };

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
      <View style={{ marginTop: hp(5) }}>
        <DefaultTextInput
          icon={<Email />}
          onChangeText={(text) => handleInputChange("email", text)}
          autoCapitalize="none"
          placeholder="Email"
        />
      </View>
      <View style={{ marginTop: hp(3) }}>
        <DefaultTextInput
          icon={<UnLock />}
          onChangeText={(text) => handleInputChange("password", text)}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Password"
        />
      </View>
      <View style={{ marginTop: hp(3) }}>
        <DefaultButton buttonKey="SignIn" handler={handlerLogin} />
      </View>
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
        </View>
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

import React, { useEffect, useState } from "react";
import { View, Platform, Alert } from "react-native";
import { DefaultImage } from "../../../components/images";
import { google } from "../../../importAllImages";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultHeading, SubHeading } from "../../../components/headings";
import { DefaultTouchableOpacity } from "../../../components/touchableOpacity";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as WebBrowser from "expo-web-browser";
import { jwtDecode } from "jwt-decode";
import {
  useUserLoginByGoogleMutation,
  useUserUpdateGenderAndUserStatusMutation,
} from "../../../api/userLogin";
import Modal from "react-native-modal";
import { useTheme } from "../../../theme/context";
import RadioButton from "../../../components/radioButton";
import { DefaultButton } from "../../../components/buttons";
import { JwtPayload } from "jsonwebtoken";
import { useAppDispatch } from "../../../hooks/dispatchAndSelector";
import { userData } from "../../../redux/AuthSlice";
import { NavigationType } from "../../../types/navigationType";
import { useNavigation } from "@react-navigation/native";
import { WEB_CLIENT_ID } from "@env";
// WebBrowser.maybeCompleteAuthSession();
interface JwtPayloadType extends JwtPayload {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    user_status: string;
  };
}
const GoogleLogin = () => {
  const [userLoginByGoogle] = useUserLoginByGoogleMutation();
  const [userUpdateGenderAndUserStatus] =
    useUserUpdateGenderAndUserStatusMutation();
  const dispatch = useAppDispatch();
  const navigation: NavigationType = useNavigation();
  const theme = useTheme();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [gender, setGender] = useState({ value: "" });
  const [who, setWho] = useState({ value: "" });
  const [userId, setUserId] = useState<number>(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      scopes: ["profile", "email"],
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const res = await GoogleSignin.signIn();
      const token = res.data.idToken;
      const response = await userLoginByGoogle({ token: token });
      const { id, user_status, gender } = response.data.message;

      if (id != undefined) {
        setUserId(id);
        if (user_status == "userstatus" && gender == "gender") {
          setModalVisible(true);
        }
      } else {
        const decoded = jwtDecode<JwtPayloadType>(response.data.message);
        const userObject = {
          id: decoded.user.id,
          first_name: decoded.user.first_name,
          last_name: decoded.user.last_name,
          user_status: decoded.user.user_status,
          token: response.data.message,
          refresh_token: response.data.refreshtoken,
        };
        const res = await dispatch(userData(userObject));
        if (res.payload.user_status === "doctor") {
          navigation.navigate("DoctorAdmin");
        } else if (res.payload.user_status === "patient") {
          navigation.navigate("PatientAdmin");
        }
      }
    } catch (error) {
      console.log("Google Error", error);
    }
  };
  const continueForLogin = async () => {
    if (gender.value === "" || who.value === "") {
      Alert.alert("Select gender and Doctor or Patient");
    } else {
      const object = { id: userId, gender: gender.value, who: who.value };
      const data = await userUpdateGenderAndUserStatus(object);
      console.log(data.data.message);
      const decoded = jwtDecode<JwtPayloadType>(data.data.message);
      const userObject = {
        id: decoded.user.id,
        first_name: decoded.user.first_name,
        last_name: decoded.user.last_name,
        user_status: decoded.user.user_status,
        token: data.data.message,
        refresh_token: data.data.refreshtoken,
      };
      const res = await dispatch(userData(userObject));
      if (res.payload.user_status === "doctor") {
        navigation.navigate("DoctorAdmin");
      } else if (res.payload.user_status === "patient") {
        navigation.navigate("PatientAdmin");
      }
      setModalVisible(false);
      setGender({ value: "" });
      setWho({ value: "" });
    }
  };
  return (
    <>
      <Modal
        isVisible={isModalVisible}
        style={{ margin: 0, position: "absolute", top: hp(30), width: "100%" }}
      >
        <View
          style={{
            backgroundColor: theme.primary.bg,
            height: hp(30),
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}
        >
          <View
            style={{
              alignItems: "center",
              margin: hp(3),
              borderBottomWidth: 0.5,
            }}
          >
            <DefaultHeading styles={{ marginBottom: hp(3) }}>
              Setect your gender and who are you
            </DefaultHeading>
          </View>
          <View
            style={{
              marginHorizontal: hp(2),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                height: hp(4),
              }}
            >
              <RadioButton
                hander={() => setGender({ value: "male" })}
                selected={gender.value === "male"}
                name="Male"
              />
              <RadioButton
                hander={() => setGender({ value: "female" })}
                selected={gender.value === "female"}
                name="Female"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginRight: wp(2),
                height: hp(4),
              }}
            >
              <RadioButton
                hander={() => setWho({ value: "doctor" })}
                selected={who.value === "doctor"}
                name="Doctor"
              />
              <RadioButton
                hander={() => setWho({ value: "patient" })}
                selected={who.value === "patient"}
                name="Patient"
              />
            </View>
          </View>
          <View
            style={{
              marginTop: hp(6),
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <DefaultButton
              buttonKey="Continue"
              styles={{ marginRight: wp(2) }}
              handler={() => continueForLogin()}
            />
          </View>
        </View>
      </Modal>
      <DefaultTouchableOpacity
        handler={() => signIn()}
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
    </>
  );
};

export default GoogleLogin;

import React, { useState } from "react";
import { View, Alert } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { JwtPayload } from "jsonwebtoken";
import { useUserLoginMutation } from "../../../api/userLogin";
import { useAppDispatch } from "../../../hooks/dispatchAndSelector";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { NavigationType } from "../../../types/navigationType";
import { userData } from "../../../redux/AuthSlice";
import { jwtDecode } from "jwt-decode";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { DefaultButton } from "../../../components/buttons";
import { DefaultTextInput } from "../../../components/textinputs";
import { Email, UnLock } from "../../../components/icons";
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

const LoginFom = () => {
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
    <>
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
    </>
  );
};

export default LoginFom;

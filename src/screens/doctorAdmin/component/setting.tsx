import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultHeading } from "../../../components/headings";
import { useTheme } from "../../../theme/context";
import { DefaultTouchableOpacity } from "../../../components/touchableOpacity";
import { persistor } from "../../../store";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../../types/navigationType";
import { userData, userDataSelector } from "../../../redux/AuthSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/dispatchAndSelector";
import { useUserLogoutMutation } from "../../../api/userLogin";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import useRefreshToken from "../../../hooks/refreshToken";

const Setting = () => {
  const dispatch = useAppDispatch();
  const { refreshtoken } = useRefreshToken();
  const [userLogout] = useUserLogoutMutation();
  const userAuth = useAppSelector(userDataSelector);
  const theme = useTheme();
  const navigation: NavigationType = useNavigation();
  const [authError, setAuthError] = useState<Boolean>(false);
  useEffect(() => {
    const createToken = async () => {
      if (authError === true) {
        refreshtoken();
        setAuthError(false);
      }
    };
    createToken();
  }, [authError]);
  const logout = async () => {
    try {
      const res = await userLogout({
        token: userAuth.authReducer.token,
        refresh_token: userAuth.authReducer.refresh_token,
      });
      const unAuth = (res.error as FetchBaseQueryError)?.status;
      if (unAuth === 401) {
        refreshtoken();
        setAuthError(true);
      } else if (res.data.login_status == false) {
        await persistor.purge();
        const response = await dispatch(
          userData({
            id: "",
            first_name: "",
            last_name: "",
            user_status: "",
            token: "",
            refresh_token: "",
          })
        );
        if (!response.payload.token) {
          navigation.navigate("Login");
        }
      }
    } catch (error) {
      console.error("Error purging persisted state:", error);
    }
  };
  return (
    <View
      style={{
        backgroundColor: theme.primary.bg,
        shadowColor: theme.primary.shadowColor,
        marginVertical: hp(4),
        marginHorizontal: wp(2),
      }}
    >
      <DefaultTouchableOpacity handler={logout}>
        <DefaultHeading>Logout</DefaultHeading>
      </DefaultTouchableOpacity>
    </View>
  );
};
export default Setting;

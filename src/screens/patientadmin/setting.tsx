import { View, Text } from "react-native";
import React from "react";
import { DefaultView, Header } from "../../components/Views";
import { LeftArrow } from "../../components/icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { DefaultTouchableOpacity } from "../../components/touchableOpacity";
import { DefaultHeading } from "../../components/headings";
import { DefaultTextInput } from "../../components/textinputs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultButton } from "../../components/buttons";

type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;
const PatientSetting = () => {
  const navigation: NavigationType = useNavigation();
  return (
    <DefaultView>
      <Header title="Setting" />
      <View style={{ marginTop: hp(10) }}>
        <View style={{ marginBottom: hp(5) }}>
          <DefaultTextInput placeholder="Full Name" />
        </View>
        <View style={{ marginBottom: hp(5) }}>
          <DefaultTextInput placeholder="Email" />
        </View>
        <View style={{ marginBottom: hp(5) }}>
          <DefaultTextInput placeholder="Change Password" />
        </View>
        <View style={{ marginBottom: hp(5) }}>
          <DefaultTextInput placeholder="Confirm Password" />
        </View>
      </View>
    </DefaultView>
  );
};

export default PatientSetting;

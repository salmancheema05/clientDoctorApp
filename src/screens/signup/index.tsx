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
import { Email, UnLock, User } from "../../components/icons";
import { logo } from "../../importAllImages";
import { DefaultImage } from "../../components/images";
import { DefaultHeading, SubHeading } from "../../components/headings";
import RadioButton from "../../components/radioButton";
import { useUserSignUpMutation } from "../../api/userLogin";

type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;
interface InputState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [userSignUp] = useUserSignUpMutation();
  const navigation: NavigationType = useNavigation();
  const [gender, setGender] = useState({ value: "" });
  const [who, setWho] = useState({ value: "" });
  const [inputValue, setInputValue] = useState<InputState>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleInputChange = (name: keyof InputState, value: string) => {
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handlerSignUp = async () => {
    if (inputValue.firstname === "") {
      Alert.alert("required First Name");
    } else if (inputValue.lastname === "") {
      Alert.alert("required Last Name");
    } else if (inputValue.email === "") {
      Alert.alert("required Email");
    } else if (inputValue.password === "") {
      Alert.alert("required Password");
    } else if (gender.value === "") {
      Alert.alert("required Gender");
    } else if (who.value === "") {
      Alert.alert("Who are you Doctor or Patient!");
    } else {
      const object = {
        ...inputValue,
        gender: gender.value,
        user_status: who.value,
      };
      const res = await userSignUp(object);
      Alert.alert(res.data.message);
      setInputValue({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      setGender({ value: "" });
      setWho({ value: "" });
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
          icon={<User />}
          value={inputValue.firstname}
          placeholder="First Name"
          onChangeText={(text) => handleInputChange("firstname", text)}
        />
      </View>
      <View style={{ marginTop: hp(5) }}>
        <DefaultTextInput
          icon={<User />}
          value={inputValue.lastname}
          placeholder="last Name"
          onChangeText={(text) => handleInputChange("lastname", text)}
        />
      </View>
      <View style={{ marginTop: hp(5) }}>
        <DefaultTextInput
          icon={<Email />}
          autoCapitalize="none"
          value={inputValue.email}
          placeholder="Email"
          onChangeText={(text) => handleInputChange("email", text)}
        />
      </View>
      <View style={{ marginTop: hp(3) }}>
        <DefaultTextInput
          icon={<UnLock />}
          secureTextEntry={true}
          autoCapitalize="none"
          value={inputValue.password}
          placeholder="Password"
          onChangeText={(text) => handleInputChange("password", text)}
        />
      </View>
      <View
        style={{
          marginTop: hp(2),
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
      <View style={{ marginTop: hp(3) }}>
        <DefaultButton buttonKey="SignUp" handler={handlerSignUp} />
      </View>

      <DefaultSection>
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
              handler={() => navigation.navigate("Login")}
            >
              Sign In
            </SubHeading>
          </View>
        </View>
      </DefaultSection>
    </DefaultView>
  );
};

export default SignUp;

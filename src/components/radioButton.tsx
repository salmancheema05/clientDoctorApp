import { View, Text } from "react-native";
import React from "react";
import { DefaultTouchableOpacity } from "./touchableOpacity";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "../theme/context";
interface RadioButtonProps {
  hander: () => void;
  selected: boolean;
  name: string;
}
const RadioButton: React.FC<RadioButtonProps> = ({
  hander,
  selected,
  name,
}) => {
  const theme = useTheme();
  return (
    <>
      <DefaultTouchableOpacity
        styles={{
          borderWidth: 2,
          borderColor: "lightgray",
          width: wp(5),
          height: wp(5),
          borderRadius: 100,
          marginLeft: 5,
          padding: 3,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
        handler={hander}
      >
        {selected ? (
          <View
            style={{
              backgroundColor: "hsla(212, 52%, 23%, 1) ",
              width: wp(3),
              height: wp(3),
              borderRadius: 100,
            }}
          ></View>
        ) : null}
      </DefaultTouchableOpacity>
      <View style={{ marginVertical: hp(0.3), marginLeft: wp(1) }}>
        <Text
          style={{
            marginTop: 3,
            marginLeft: 3,
            fontSize: 12,
            color: theme.primary.light,
          }}
        >
          {name}
        </Text>
      </View>
    </>
  );
};

export default RadioButton;

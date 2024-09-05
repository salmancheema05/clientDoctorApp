import React from "react";
import { TouchableOpacity, Text, TextStyle, ViewStyle } from "react-native";
// import { DefaultTouchableOpacity } from "./TouchableOpacity";

interface ButtonProps {
  buttonKey?: string;
  styles?: ViewStyle;
  textStyle?: TextStyle;
  handler?: () => void;
  children?: React.ReactNode;
}
interface ButtonMapping {
  [key: string]: {
    name: string;
    style: object;
    textStyle: object;
  };
}
const DefaultButton: React.FC<ButtonProps> = ({
  buttonKey = "default",
  styles,
  textStyle,
  handler = null,
  children = null,
}) => {
  const buttonMappings: ButtonMapping = {
    Remove: {
      name: "Remove",
      style: {
        backgroundColor: "hsla(212, 52%, 23%, 1)",
        width: "50%",
        color: "white",
        padding: 10,
        borderRadius: 40,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    Booking: {
      name: "Booking",
      style: {
        backgroundColor: "hsla(212, 52%, 23%, 1)",
        width: "100%",
        color: "white",
        padding: 10,
        borderRadius: 40,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 15,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    Confirm: {
      name: "Confirm",
      style: {
        backgroundColor: "hsla(212, 52%, 23%, 1)",
        width: "100%",
        color: "white",
        padding: 10,
        borderRadius: 40,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 15,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    Done: {
      name: "Done",
      style: {
        backgroundColor: "hsla(212, 52%, 23%, 1)",
        width: "100%",
        color: "white",
        padding: 10,
        borderRadius: 40,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 15,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    SignIn: {
      name: "Sign In",
      style: {
        backgroundColor: "hsla(212, 52%, 23%, 1)",
        width: "100%",
        color: "white",
        padding: 10,
        borderRadius: 40,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 15,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    SignUp: {
      name: "Sign Up",
      style: {
        backgroundColor: "hsla(212, 52%, 23%, 1)",
        width: "100%",
        color: "white",
        padding: 10,
        borderRadius: 40,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 15,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    Cancel: {
      name: "Cancel",
      style: {
        backgroundColor: "hsla(220, 3%, 92%, 1)",
        width: "50%",
        color: "white",
        padding: 10,
        borderRadius: 40,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "hsla(212, 52%, 23%, 1)",
        ...textStyle,
      },
    },
  };

  return (
    <TouchableOpacity
      style={{
        ...buttonMappings[buttonKey].style,
        ...styles,
      }}
      onPress={handler}
    >
      <Text style={{ ...buttonMappings[buttonKey].textStyle }}>
        {children != null ? children : buttonMappings[buttonKey].name}
      </Text>
    </TouchableOpacity>
  );
};

export { DefaultButton };

import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";

interface ImageProps {
  source?: ImageSourcePropType;
  styles?: StyleProp<ImageStyle>;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
  // You can add more props as per your requirement
}

const DefaultImage: React.FC<ImageProps> = ({
  source,
  styles,
  resizeMode = "stretch",
}) => {
  return (
    <Image
      source={source}
      style={[{ width: "100%", height: "100%", borderRadius: 10 }, styles]}
      resizeMode={resizeMode}
    />
  );
};
const CircleImage: React.FC<ImageProps> = ({
  source,
  styles,
  resizeMode = "cover",
}) => {
  return (
    <Image
      source={source}
      style={[
        { width: hp(8), height: hp(8), borderRadius: hp(100), marginTop: 0 },
        styles,
      ]}
      resizeMode={resizeMode}
    />
  );
};

export { DefaultImage, CircleImage };

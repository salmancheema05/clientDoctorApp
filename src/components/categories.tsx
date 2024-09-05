import React from "react";
import { View, ImageSourcePropType } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultText } from "./texts";
import { DefaultImage } from "./images";
import { categoryTransparentBg } from "../importAllImages";

interface CategoryProps {
  bgcolor: string;
  name: string;
  source: ImageSourcePropType;
}
const CategoryItem: React.FC<CategoryProps> = ({ source, name, bgcolor }) => {
  return (
    <View
      style={{
        width: "22%",
        height: hp(15),
      }}
    >
      <View
        style={{
          backgroundColor: bgcolor,
          borderRadius: 10,
          width: "100%",
          height: hp(10),
        }}
      >
        <View style={{}}>
          <DefaultImage
            source={categoryTransparentBg}
            styles={{ width: 50, height: 50 }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: "25%",
            left: "25%",
          }}
        >
          <DefaultImage source={source} styles={{ width: 36, height: 36 }} />
        </View>
      </View>
      <DefaultText
        styles={{ textAlign: "center", fontSize: 15, marginTop: hp(1) }}
      >
        {name}
      </DefaultText>
    </View>
  );
};

export default CategoryItem;

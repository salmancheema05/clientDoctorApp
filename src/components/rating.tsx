import { View, Text } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { DefaultText } from "./texts";
import { useTheme } from "../theme/context";

interface ReadOnlyRatingProps {
  starLenght?: number;
  starSize?: number;
  tintColor?: string;
  userRating: number;
  viewRating?: string;
  styles?: object;
}
const DefaultRating = () => {
  const [selectRating, setSelectRating] = useState(0);
  return (
    <Rating
      type="star"
      ratingColor="#3498db"
      ratingBackgroundColor="#c8c7c8"
      ratingCount={5}
      imageSize={20}
      fractions={1}
      jumpValue={0.5}
      startingValue={selectRating}
      onFinishRating={(rating) => {
        console.log(rating);
        setSelectRating(rating);
      }}
    />
  );
};
const ReadOnlyRating: React.FC<ReadOnlyRatingProps> = ({
  starLenght = 1,
  starSize = 20,
  tintColor = null,
  userRating = null,
  viewRating,
  styles,
}) => {
  const theme = useTheme();
  return (
    <View style={{ flexDirection: "row" }}>
      <Rating
        readonly
        ratingCount={starLenght}
        imageSize={starSize}
        startingValue={userRating}
        tintColor={tintColor === null ? theme.primary.bg : tintColor}
        style={{ ...styles }}
      />
      <DefaultText>{viewRating}</DefaultText>
    </View>
  );
};
export { DefaultRating, ReadOnlyRating };

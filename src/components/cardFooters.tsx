import React from "react";
import { DefaultButton } from "./buttons";
import { TextStyle, View, ViewStyle } from "react-native";
import { ClickableIcons } from "./clickableIcons";
import { DefaultText } from "./texts";
import { ReadOnlyRating } from "./rating";
import { PostBadge } from "./badges";
import { stringConvertInterger } from "../../ulitity/functions";

interface DefaultFooternProps {
  buttonKey?: string;
  styles?: ViewStyle;
  textStyle?: TextStyle;
}
interface TextWithIconProps {
  handler?: () => void;
  styles?: { text?: TextStyle; clickableIcons?: ViewStyle };
  text: string;
  icon: React.ReactNode;
}

interface PostWithRatingFooterPops {
  tintColor?: string;
  starSize?: number;
  starLenght?: number;
  yourPost: string;
  textStyle?: TextStyle;
  userRating: string;
}
const DefaultFooter: React.FC<DefaultFooternProps> = ({
  buttonKey,
  styles,
  textStyle,
}) => {
  return (
    <DefaultButton
      buttonKey={buttonKey}
      styles={styles}
      textStyle={textStyle}
    />
  );
};

const TextWithIcon: React.FC<TextWithIconProps> = ({
  text,
  icon,
  handler,
  styles = { text: {}, clickableIcons: {} },
}) => {
  return (
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}
    >
      <DefaultText styles={styles.text}>{text}</DefaultText>
      <ClickableIcons handler={handler} styles={styles.clickableIcons}>
        {icon}
      </ClickableIcons>
    </View>
  );
};

const PostWithRatingFooter: React.FC<PostWithRatingFooterPops> = ({
  tintColor,
  starSize,
  starLenght = 1,
  yourPost,
  textStyle,
  userRating,
}) => {
  let selectedStar = stringConvertInterger(userRating, starLenght);
  return (
    <View
      style={{
        //flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <PostBadge textStyle={textStyle}>{yourPost}</PostBadge>
      <ReadOnlyRating
        tintColor={tintColor}
        starSize={starSize}
        starLenght={starLenght}
        userRating={selectedStar}
        viewRating={userRating}
      />
    </View>
  );
};

export { DefaultFooter, TextWithIcon, PostWithRatingFooter };

import React from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultSection } from "../../../components/Views";
import { DefaultTitleWithLink, SubHeading } from "../../../components/headings";
import { CircleImage } from "../../../components/images";
import { ReadOnlyRating } from "../../../components/rating";
import { DefaultText } from "../../../components/texts";

const Reviews = () => {
  return (
    <DefaultSection>
      <DefaultTitleWithLink title="Reviews" />

      <DefaultSection>
        <View style={{ flexDirection: "row" }}>
          <View>
            <CircleImage source={require("../../../images/user1.png")} />
          </View>
          <View style={{ marginHorizontal: wp(3), marginTop: hp(0) }}>
            <SubHeading>Emily Anderson</SubHeading>
            <View style={{ marginTop: hp(1) }}></View>
            <ReadOnlyRating
              userRating={5}
              viewRating="5.0"
              starLenght={5}
              starSize={15}
              styles={{ paddingRight: 10, paddingTop: 2 }}
            />
          </View>
        </View>
        <DefaultText styles={{ marginTop: hp(1) }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          molestias voluptatibus accusamus, Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </DefaultText>
      </DefaultSection>
      <DefaultSection>
        <View style={{ flexDirection: "row" }}>
          <View>
            <CircleImage source={require("../../../images/user1.png")} />
          </View>
          <View style={{ marginHorizontal: wp(3), marginTop: hp(0) }}>
            <SubHeading>Emily Anderson</SubHeading>
            <View style={{ marginTop: hp(1) }}></View>
            <ReadOnlyRating
              userRating={5}
              viewRating="5.0"
              starLenght={5}
              starSize={15}
              styles={{ paddingRight: 10, paddingTop: 2 }}
            />
          </View>
        </View>
        <DefaultText styles={{ marginTop: hp(1) }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          molestias voluptatibus accusamus, Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </DefaultText>
      </DefaultSection>
    </DefaultSection>
  );
};

export default Reviews;

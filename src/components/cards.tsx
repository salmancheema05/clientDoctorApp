import { ImageSourcePropType, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultHeading, SubHeading } from "./headings";
import { DefaultText } from "./texts";
import { DefaultImage } from "./images";
import { ReadOnlyRating } from "./rating";
import { Heart, OutLineHeart, OutLineLocation } from "./icons";
import { DefaultTouchableOpacity } from "./touchableOpacity";
import { useTheme } from "../theme/context";
interface ClinicCardProps {
  source: ImageSourcePropType;
  name: string;
  ClinicAddress: string;
  distance?: string;
  distanceTime?: string;
  rating: number;
  totalViews?: number;
  styles?: object;
  handler?: () => void;
}
interface DoctorCardProps extends ClinicCardProps {
  departmentName: string;
  totalRating: string;
  favoritesIcone?: boolean;
  fee?: number;
  doctorDetail?: () => void;
}
export const ClinicCard: React.FC<ClinicCardProps> = ({
  source,
  name,
  ClinicAddress,
  distance,
  distanceTime,
  rating,
  totalViews,
  styles,
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.primary.bg,
        shadowColor: theme.primary.shadowColor,
        elevation: 3,
        width: wp(70),
        borderRadius: 20,
        marginRight: wp(10),
        ...styles,
      }}
    >
      <DefaultImage
        source={source}
        styles={{
          width: "100%",
          height: 150,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderRadius: 0,
        }}
      />
      <View style={{ marginTop: hp(1), paddingHorizontal: wp(5) }}>
        <DefaultHeading>{name}</DefaultHeading>
      </View>
      <View
        style={{
          marginTop: hp(1.5),
          flexDirection: "row",
          paddingHorizontal: wp(3),
        }}
      >
        <OutLineLocation />

        <DefaultText styles={{ marginTop: hp(0.5) }}>
          {ClinicAddress}
        </DefaultText>
      </View>
      <View
        style={{
          marginTop: hp(1.5),
          paddingHorizontal: wp(6),

          flexDirection: "row",
        }}
      >
        <DefaultText>{rating}</DefaultText>
        <ReadOnlyRating
          starLenght={5}
          userRating={rating}
          starSize={16}
          styles={{ marginTop: hp(0.2), paddingHorizontal: wp(2) }}
        />
        <DefaultText>({totalViews} Reviews)</DefaultText>
      </View>
      <View
        style={{
          marginVertical: hp(3),
          borderTopWidth: 0.5,
          borderColor: theme.primary.borderColor,
          marginHorizontal: wp(5),
        }}
      >
        <View
          style={{
            marginTop: hp(3),
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: wp(3),
          }}
        >
          <DefaultText>
            {distance}/{distanceTime}
          </DefaultText>
          <DefaultText>Hospital</DefaultText>
        </View>
      </View>
    </View>
  );
};

export const DoctorProfileCard: React.FC<DoctorCardProps> = ({
  name,
  departmentName,
  ClinicAddress,
  rating,
  fee,
  totalRating,
  source,
  handler,
  favoritesIcone = false,
  doctorDetail,
}) => {
  const theme = useTheme();
  return (
    <DefaultTouchableOpacity handler={doctorDetail}>
      <View
        style={{
          backgroundColor: theme.primary.bg,
          shadowColor: theme.primary.shadowColor,
          elevation: 3,
          width: "100%",
          height: hp(18),
          marginBottom: wp(5),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "35%",
            height: hp(18),
            paddingHorizontal: wp(3),
            paddingVertical: hp(1),
          }}
        >
          <DefaultImage source={source} />
        </View>
        <View
          style={{
            width: "65%",
            marginVertical: hp(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: hp(1),
              borderBottomWidth: 0.5,
              paddingHorizontal: wp(1.4),
              borderColor: theme.primary.borderColor,
            }}
          >
            <View>
              <SubHeading>Dr.{name}</SubHeading>
            </View>
            <DefaultTouchableOpacity
              styles={{ paddingRight: wp(2), paddingTop: hp(0.5) }}
              handler={handler}
            >
              {favoritesIcone == true ? (
                <Heart
                  size={20}
                  color={theme.primary.iconColor}
                  handler={handler}
                />
              ) : (
                <OutLineHeart
                  size={20}
                  color={theme.primary.iconColor}
                  handler={handler}
                />
              )}
            </DefaultTouchableOpacity>
          </View>
          <View style={{ marginTop: hp(1), paddingHorizontal: wp(1.4) }}>
            <SubHeading>{departmentName}</SubHeading>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp(1),
            }}
          >
            <OutLineLocation size={22} color={theme.primary.iconColor} />

            <DefaultText>{ClinicAddress}</DefaultText>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp(1),
            }}
          >
            <View
              style={{
                borderRightWidth: 0.5,
                paddingRight: wp(3),
                borderRightColor: "hsla(220, 16%, 50%, 1)",
              }}
            >
              <ReadOnlyRating
                starLenght={1}
                userRating={rating}
                starSize={16}
                viewRating={totalRating}
              />
            </View>
            <View style={{ paddingLeft: hp(1) }}>
              <DefaultText>{fee} Fee</DefaultText>
            </View>
          </View>
        </View>
      </View>
    </DefaultTouchableOpacity>
  );
};

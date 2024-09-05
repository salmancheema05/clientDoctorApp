import React from "react";
import { View } from "react-native";
import { DefaultSection, DefaultView } from "../../components/Views";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultText } from "../../components/texts";
import { DefaultImage } from "../../components/images";
import Categories from "./component/categories";
import Header from "./component/header";
import {
  sliderTransparentBg,
  sliderTransparentBg1,
  sliderDoctorImage1,
} from "../../importAllImages";
import NearByMedicalCenter from "./component/nearByMedicalCenter";
import { ScrollVertical } from "../../components/Scrolling";

const HomeScreen = () => {
  return (
    <ScrollVertical>
      <DefaultView>
        <Header />
        <DefaultSection>
          <View
            style={{
              backgroundColor: "#4f928a",
              width: "100%",
              height: hp(25),
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 150,
                height: 110,
                position: "absolute",
                top: 0,
              }}
            >
              <DefaultImage
                source={sliderTransparentBg}
                styles={{ width: 150, height: 110 }}
              />
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                paddingTop: hp(3),
              }}
            >
              <View
                style={{ width: "60%", height: "100%", paddingLeft: wp(4) }}
              >
                <DefaultText styles={{ color: "white", fontWeight: "800" }}>
                  Looking For
                </DefaultText>
                <DefaultText
                  styles={{
                    color: "white",
                    fontWeight: "800",
                    marginTop: hp(1),
                  }}
                >
                  Specialist Doctors?
                </DefaultText>
                <DefaultText
                  styles={{
                    color: "white",
                    fontSize: 16,
                    marginTop: hp(1),
                    lineHeight: 30,
                  }}
                >
                  Schedule an appointment with our top doctors.
                </DefaultText>
              </View>
              <View
                style={{
                  width: "40%",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <DefaultImage
                  source={sliderDoctorImage1}
                  styles={{ width: 200 }}
                />
              </View>
            </View>
            <View style={{ position: "absolute", bottom: 0, left: wp(20) }}>
              <DefaultImage
                source={sliderTransparentBg1}
                styles={{ width: 150, height: 30 }}
              />
            </View>
          </View>
        </DefaultSection>
        <Categories />
        <NearByMedicalCenter />
      </DefaultView>
    </ScrollVertical>
  );
};

export default HomeScreen;

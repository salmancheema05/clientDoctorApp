import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultSection, DefaultView, Header } from "../../components/Views";

import { DefaultButton } from "../../components/buttons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ScrollVertical } from "../../components/Scrolling";
import { useTheme } from "../../theme/context";
import DoctorCard from "./components/doctorCard";
import OtherInfo from "./components/otherInfo";
import About from "./components/about";
import WorkingTime from "./components/workingTime";
import Reviews from "./components/reviews";
import { RouteProp, useRoute } from "@react-navigation/native";
type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;
type RootStackParamList = {
  doctor_id: { id: string };
};
type DetailsScreenRouteProp = RouteProp<RootStackParamList, "doctor_id">;
const DoctorDetailScreen = () => {
  const navigation: NavigationType = useNavigation();
  const theme = useTheme();
  const route = useRoute<DetailsScreenRouteProp>();
  const { id } = route.params;

  return (
    <>
      <DefaultView>
        <ScrollVertical styles={{ marginBottom: hp(7) }}>
          <Header title="Doctor Detail" />
          <DoctorCard id={parseInt(id)} />
          <OtherInfo />
          <About />
          <WorkingTime />
          <Reviews />
        </ScrollVertical>
      </DefaultView>
      <DefaultSection
        styles={{
          width: "100%",
          height: hp(8),
          marginTop: hp(4),
          paddingHorizontal: wp(3),
          paddingVertical: hp(1),
          backgroundColor: theme.primary.bg,
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
        }}
      >
        <DefaultButton
          buttonKey="Booking"
          handler={() => navigation.navigate("Booking")}
        />
      </DefaultSection>
    </>
  );
};

export default DoctorDetailScreen;

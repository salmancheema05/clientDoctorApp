import { View, Text } from "react-native";
import React from "react";
import { DefaultSection } from "../../../components/Views";
import { ScrollVertical } from "../../../components/Scrolling";
import { ClinicCard } from "../../../components/cards";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "../../../theme/context";
const ClinicList = () => {
  const theme = useTheme();
  return (
    <ScrollVertical>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.primary.bg,
          paddingHorizontal: 10,
        }}
      >
        <DefaultSection>
          <ClinicCard
            source={require("../../../images/centerImage1.png")}
            name="Sunrise Health Clinic"
            ClinicAddress="123 Oak Street,CA 98765"
            distance="2.5 km"
            distanceTime="45 min"
            rating={4.5}
            totalViews={58}
            styles={{ width: "100%", marginBottom: wp(5) }}
          />
          <ClinicCard
            source={require("../../../images/centerImage1.png")}
            name="Sunrise Health Clinic"
            ClinicAddress="123 Oak Street,CA 98765"
            distance="2.5 km"
            distanceTime="45 min"
            rating={4.5}
            totalViews={58}
            styles={{ width: "100%", marginBottom: wp(5) }}
          />
        </DefaultSection>
      </View>
    </ScrollVertical>
  );
};

export default ClinicList;

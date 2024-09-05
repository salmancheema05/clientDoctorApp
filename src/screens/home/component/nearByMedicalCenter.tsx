import React from "react";
import { DefaultSection } from "../../../components/Views";
import { DefaultHorizontalScrolling } from "../../../components/Scrolling";
import { DefaultTitleWithLink } from "../../../components/headings";
import { ClinicCard } from "../../../components/cards";

const NearByMedicalCenter = () => {
  return (
    <DefaultSection>
      <DefaultTitleWithLink title="NearBy Medical Center" />
      <DefaultHorizontalScrolling>
        <ClinicCard
          source={require("../../../images/centerImage1.png")}
          name="Sunrise Health Clinic"
          ClinicAddress="123 Oak Street,CA 98765"
          distance="2.5 km"
          distanceTime="45 min"
          rating={4.5}
          totalViews={58}
        />
        <ClinicCard
          source={require("../../../images/centerImage1.png")}
          name="Sunrise Health Clinic"
          ClinicAddress="123 Oak Street,CA 98765"
          distance="2.5 km"
          distanceTime="45 min"
          rating={4.5}
          totalViews={58}
        />
      </DefaultHorizontalScrolling>
    </DefaultSection>
  );
};

export default NearByMedicalCenter;

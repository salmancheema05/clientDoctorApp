import React from "react";
import { DefaultSection } from "../../../components/Views";
import { DefaultText } from "../../../components/texts";
import { DefaultHeading } from "../../../components/headings";

const WorkingTime = () => {
  return (
    <DefaultSection>
      <DefaultHeading>Working Time</DefaultHeading>
      <DefaultSection>
        <DefaultText>
          Mon - Fri 8:00 AM To 11:00 AM - 8:00 PM To 11:00 PM
        </DefaultText>
      </DefaultSection>
    </DefaultSection>
  );
};

export default WorkingTime;

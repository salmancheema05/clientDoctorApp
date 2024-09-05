import React from "react";
import { DefaultSection } from "../../../components/Views";
import { DefaultHeading } from "../../../components/headings";
import { DefaultText } from "../../../components/texts";

const About = () => {
  return (
    <DefaultSection>
      <DefaultHeading>About US</DefaultHeading>
      <DefaultSection>
        <DefaultText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          molestias voluptatibus accusamus, totam qui voluptates facere corporis
          eligendi accusantium commodi obcaecati est dolores...
        </DefaultText>
      </DefaultSection>
      <DefaultText styles={{ fontSize: 15, fontWeight: "500" }}>
        See More
      </DefaultText>
    </DefaultSection>
  );
};

export default About;

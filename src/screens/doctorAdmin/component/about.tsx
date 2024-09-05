import React from "react";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultSection } from "../../../components/Views";
import { DefaultText } from "../../../components/texts";

const About = () => {
  return (
    <DefaultSection
      styles={{
        marginTop: hp(3),
        paddingHorizontal: wp(3),
        paddingVertical: wp(5),
      }}
    >
      <DefaultText styles={{ textAlign: "justify" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam
        nobis ab nesciunt expedita! Exercitationem sequi blanditiis nisi vero
        nostrum corporis nulla, officia culpa nesciunt odio, qui ut cumque
        impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
        laboriosam nobis ab nesciunt expedita! Exercitationem sequi blanditiis
        nisi vero nostrum corporis nulla, officia culpa nesciunt odio, qui ut
        cumque impedit. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Hic laboriosam nobis ab nesciunt expedita! Exercitationem sequi
        blanditiis nisi vero nostrum corporis nulla, officia culpa nesciunt
        odio, qui ut cumque impedit. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Hic laboriosam nobis ab nesciunt expedita!
        Exercitationem sequi blanditiis nisi vero nostrum corporis nulla,
        officia culpa nesciunt odio, qui ut cumque impedit. Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Hic laboriosam nobis ab nesciunt
        expedita! Exercitationem sequi blanditiis nisi vero nostrum corporis
        nulla, officia culpa nesciunt odio, qui ut cumque impedit. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Hic laboriosam nobis ab
        nesciunt expedita! Exercitationem sequi blanditiis nisi vero nostrum
        corporis nulla, officia culpa nesciunt odio, qui ut cumque impedit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam
        nobis ab nesciunt expedita! Exercitationem sequi blanditiis nisi vero
        nostrum corporis nulla, officia culpa nesciunt odio, qui ut cumque
        impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
        laboriosam nobis ab nesciunt expedita! Exercitationem sequi blanditiis
        nisi vero nostrum corporis nulla, officia culpa nesciunt odio, qui ut
        cumque impedit.
      </DefaultText>
    </DefaultSection>
  );
};

export default About;

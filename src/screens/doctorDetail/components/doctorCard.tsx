import React from "react";
import { DefaultSection } from "../../../components/Views";
import { DoctorProfileCard } from "../../../components/cards";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useAppSelector } from "../../../hooks/dispatchAndSelector";
import { selectDoctorById } from "../../../redux/doctor";
import { capitalizeName } from "../../../../ulitity/capitalizeName";
const DoctorCard: React.FC<{ id: number }> = ({ id }) => {
  const doctorObject = useAppSelector((state) => selectDoctorById(state, id));
  return (
    <DefaultSection styles={{ paddingHorizontal: wp(1) }}>
      <DoctorProfileCard
        name={
          capitalizeName(doctorObject.first_name) +
          " " +
          capitalizeName(doctorObject.last_name)
        }
        departmentName={capitalizeName(doctorObject.department_name)}
        ClinicAddress="Cardiologist Center,USA"
        fee={1800}
        rating={4.5}
        totalRating="4.5"
        favoritesIcone={doctorObject.isFavorite}
        source={require("../../../images/doctorImage1.png")}
      />
    </DefaultSection>
  );
};

export default DoctorCard;

import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { DoctorProfileCard } from "../../../components/cards";
import { DefaultSection } from "../../../components/Views";
import { NavigationType } from "../../../types/navigationType";
import { useNavigation } from "@react-navigation/native";
import { useDoctorQuery } from "../../../api/doctor";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/dispatchAndSelector";
import {
  clearList,
  doctorData,
  doctorDataSelector,
  myFavorite,
} from "../../../redux/doctor";
import { Doctor } from "../../../types/doctor";
import { capitalizeName } from "../../../../ulitity/capitalizeName";
import { selectDepartmentSelector } from "../../../redux/selectDepartment";
import { favoriteDataSelector } from "../../../redux/favorite";
const DoctorList = () => {
  const navigation: NavigationType = useNavigation();
  const dispatch = useAppDispatch();
  const selectDepartment = useAppSelector(selectDepartmentSelector);
  const { data } = useDoctorQuery(selectDepartment);
  const doctorList = useAppSelector(doctorDataSelector).list;
  const favoriteList =
    useAppSelector(favoriteDataSelector).FavoriteReducer.list;
  const fetchDoctors = () => {
    if (data) {
      data.forEach((item) => {
        const object = favoriteList.some((fav) => fav.id === item.id);
        const updateData = { ...item, isFavorite: object };
        dispatch(doctorData(updateData));
      });
    }
  };

  const isFavorite = async (doctor_id: number) => {
    const index = doctorList.findIndex((doctor) => doctor.id === doctor_id);
    const updatedData = (doctorList[index].isFavorite = true);
    if (updatedData) {
      dispatch(myFavorite({ doctor_id, data: updatedData }));
    }
  };

  useEffect(() => {
    dispatch(clearList());
    fetchDoctors();
  }, [data, dispatch]);
  return (
    <DefaultSection>
      <FlatList
        data={doctorList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: Doctor }) => (
          <DoctorProfileCard
            handler={() => isFavorite(item.id)}
            favoritesIcone={item.isFavorite}
            doctorDetail={() =>
              navigation.navigate("DoctorDetail", { id: item.id })
            }
            name={capitalizeName(item.first_name + " " + item.last_name)}
            departmentName={capitalizeName(item.department_name)}
            ClinicAddress="Cardiologist Center,USA"
            fee={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../../images/userpic.jpg")}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </DefaultSection>
  );
};

export default DoctorList;

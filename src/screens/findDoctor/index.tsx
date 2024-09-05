import React from "react";
import { DefaultView, Header } from "../../components/Views";
import SearchBox from "./components/searchBox";
import DepartmentList from "./components/departmentList";
import DoctorList from "./components/doctorList";

const FindDoctorScreen = () => {
  return (
    <DefaultView styles={{ flex: 1 }}>
      <Header title="All Doctors" />
      <SearchBox />
      <DepartmentList />
      <DoctorList />
    </DefaultView>
  );
};

export default FindDoctorScreen;

import React from "react";
import { DefaultView, Header } from "../../components/Views";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DoctorList from "./components/doctorList";
// import ClinicList from "./components/clinicList";
// import { useTheme } from "../../theme/context";
const FavoritesScreen = () => {
  //   const Tab = createMaterialTopTabNavigator();
  //   const theme = useTheme();
  return (
    <DefaultView>
      <Header title="Favorites" />
      <DoctorList />
      {/* <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.primary.dark,
          tabBarInactiveTintColor: theme.primary.light,
          tabBarStyle: { backgroundColor: theme.primary.bg },
          tabBarIndicatorStyle: { backgroundColor: theme.primary.dark },
          tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        }}
      >
        <Tab.Screen name="Doctors" component={DoctorList} />
        <Tab.Screen name="Clinic" component={ClinicList} />
      </Tab.Navigator> */}
    </DefaultView>
  );
};

export default FavoritesScreen;

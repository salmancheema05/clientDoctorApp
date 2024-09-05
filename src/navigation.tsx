import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  HomeScreen,
  LoginScreen,
  SignupScreen,
  FindDoctorScreen,
  DoctorDetailScreen,
  PatientAdminScreen,
  PatientSetting,
  DoctorAdminScreen,
  FavoritesScreen,
  BookingScreen,
} from "./importScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Login, Heart, Search } from "./components/icons";
import { userpic } from "./importAllImages";
import { CircleImage } from "./components/images";
import { useTheme } from "./theme/context";
import { useAppSelector } from "./hooks/dispatchAndSelector";
import { userDataSelector } from "./redux/AuthSlice";
import { DefaultText } from "./components/texts";
import { DefaultHeading } from "./components/headings";
const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();
  const userAuth = useAppSelector(userDataSelector);
  useEffect(() => {
    //console.log(userAuth.authReducer);
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.primary.bg} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: theme.primary.bg },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? theme.primary.circleBg : null,
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Home
                  color={focused ? theme.primary.dark : theme.primary.iconColor}
                  size={25}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? theme.primary.circleBg : null,
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Heart
                  color={focused ? theme.primary.dark : theme.primary.iconColor}
                  size={25}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="FindDoctor"
          component={FindDoctorScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? theme.primary.circleBg : null,
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Search
                  color={focused ? theme.primary.dark : theme.primary.iconColor}
                  size={25}
                />
              </View>
            ),
          }}
        />
        {userAuth.authReducer.user_status === "patient" && (
          <>
            <Tab.Screen
              name="PatientAdmin"
              component={PatientAdminScreen}
              options={{
                //tabBarStyle: { display: "none" },
                tabBarIcon: ({ focused }) => (
                  <View
                    style={{
                      backgroundColor: "#c2185b",
                      width: 35,
                      height: 35,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DefaultHeading>
                      {userAuth.authReducer.first_name.charAt(0)}
                    </DefaultHeading>
                  </View>
                ),
                // tabBarButton: () => null,
              }}
            />
            <Tab.Screen
              name="PatientSetting"
              component={PatientSetting}
              options={{
                tabBarStyle: { display: "none" },
                tabBarButton: () => null,
              }}
            />
          </>
        )}
        {userAuth.authReducer.user_status === "doctor" && (
          <Tab.Screen
            name="DoctorAdmin"
            component={DoctorAdminScreen}
            options={{
              tabBarStyle: { display: "none" },
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    backgroundColor: "#c2185b",
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DefaultHeading>
                    {userAuth.authReducer.first_name.charAt(0)}
                  </DefaultHeading>
                </View>
              ),
            }}
          />
        )}
        {userAuth.authReducer.token === "" && (
          <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{
              tabBarStyle: { display: "none" },
              tabBarIcon: () => <Login color="#a9aeb9" size={25} />,
              // tabBarButton: () => null,
            }}
          />
        )}
        {userAuth.authReducer.token === "" && (
          <Tab.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              tabBarStyle: { display: "none" },
              tabBarButton: () => null,
            }}
          />
        )}

        <Tab.Screen
          name="DoctorDetail"
          component={DoctorDetailScreen}
          options={{
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

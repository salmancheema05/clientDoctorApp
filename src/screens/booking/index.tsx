import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  DefaultGrid,
  DefaultSection,
  DefaultView,
  Header,
} from "../../components/Views";
import { Calendar } from "react-native-calendars";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultText } from "../../components/texts";
import { DefaultHeading } from "../../components/headings";
import { DefaultButton } from "../../components/buttons";
import Modal from "react-native-modal";
import { tick } from "../../importAllImages";
import { DefaultImage } from "../../components/images";
import { useTheme } from "../../theme/context";
const BookingScreen = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState("");
  const currentDate = new Date();
  const theme = useTheme();
  return (
    <>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{ width: "90%", justifyContent: "center" }}
      >
        <View
          style={{
            backgroundColor: theme.primary.bg,
            height: hp(70),
            borderRadius: 70,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: wp(40),
              height: wp(40),
              borderRadius: 100,
              backgroundColor: theme.primary.circleBg,
              marginTop: hp(5),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DefaultImage source={tick} styles={{ width: 100, height: 100 }} />
          </View>
          <View
            style={{
              marginTop: hp(5),
            }}
          >
            <DefaultHeading>Congratulations!</DefaultHeading>
          </View>
          <View
            style={{
              marginTop: hp(2),
              marginHorizontal: wp(10),
            }}
          >
            <DefaultText
              styles={{ fontSize: 18, fontWeight: "400", lineHeight: 40 }}
            >
              Your appointment with Dr. David Patel is confirmed for June 30,
              2023, at 10:00 AM.
            </DefaultText>
          </View>
          <DefaultButton
            buttonKey="Done"
            handler={() => setModalVisible(false)}
            styles={{ marginTop: hp(5), width: "90%" }}
          />
        </View>
      </Modal>
      <DefaultView>
        <Header title="Booking Appointment" />
        <DefaultSection>
          <View
            style={{ shadowColor: theme.primary.shadowColor, elevation: 5 }}
          >
            <Calendar
              minDate={currentDate.toISOString().split("T")[0]}
              onDayPress={(day) => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  marked: false,
                  selectedColor: " hsla(212, 52%, 23%, 1)",
                },
              }}
              theme={{
                calendarBackground: theme.primary.bg,
                monthTextColor: theme.primary.light,
                dayTextColor: theme.primary.light,
                textDisabledColor: theme.primary.disabledColor,
              }}
            />
          </View>
        </DefaultSection>
        <DefaultSection>
          <DefaultHeading>Select Hour</DefaultHeading>

          <DefaultGrid
            styles={{
              justifyContent: "space-between",
              marginTop: hp(3),
            }}
          >
            <View
              style={{
                width: "30%",
                height: hp(4),
                backgroundColor: theme.primary.circleBg,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: hp(2),
              }}
            >
              <DefaultText>09:00 Am</DefaultText>
            </View>
            <View
              style={{
                width: "30%",
                height: hp(4),
                backgroundColor: theme.primary.circleBg,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: hp(2),
              }}
            >
              <DefaultText>09:30 Am</DefaultText>
            </View>
            <View
              style={{
                width: "30%",
                height: hp(4),
                backgroundColor: theme.primary.circleBg,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: hp(2),
              }}
            >
              <DefaultText>10:00 Am</DefaultText>
            </View>
            <View
              style={{
                width: "30%",
                height: hp(4),
                backgroundColor: theme.primary.circleBg,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: hp(2),
              }}
            >
              <DefaultText>10:30 Am</DefaultText>
            </View>
            <View
              style={{
                width: "30%",
                height: hp(4),
                backgroundColor: theme.primary.circleBg,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: hp(2),
              }}
            >
              <DefaultText>11:00 Am</DefaultText>
            </View>
            <View
              style={{
                width: "30%",
                height: hp(4),
                backgroundColor: "hsla(212, 52%, 23%, 1)",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: hp(2),
              }}
            >
              <DefaultText styles={{ color: "white" }}>11:30 Am</DefaultText>
            </View>
          </DefaultGrid>
        </DefaultSection>
      </DefaultView>
      <DefaultSection
        styles={{
          width: "100%",
          height: hp(8),
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          marginTop: hp(4),
          paddingHorizontal: wp(3),
          paddingVertical: hp(1),
        }}
      >
        <DefaultButton
          buttonKey="Confirm"
          handler={() => setModalVisible(true)}
        />
      </DefaultSection>
    </>
  );
};

export default BookingScreen;

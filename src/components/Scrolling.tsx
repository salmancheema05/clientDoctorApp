import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
interface ScrollingProps {
  children?: React.ReactNode;
  styles?: object;
}
const DefaultHorizontalScrolling: React.FC<ScrollingProps> = ({
  children,
  styles,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: wp(1.5) }}
    >
      {children}
    </ScrollView>
  );
};
const ScrollVertical: React.FC<ScrollingProps> = ({ children, styles }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, ...styles }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
export { DefaultHorizontalScrolling, ScrollVertical };

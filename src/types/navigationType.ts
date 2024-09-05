import { NavigationProp } from "@react-navigation/native";
export type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;

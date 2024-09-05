import { AntDesign } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
interface Iconprops {
  size?: number;
  color?: string;
  handler?: () => void;
}
export const RightArrow: React.FC<Iconprops> = ({
  size = 18,
  color = "gray",
}) => <AntDesign name="arrowright" size={size} color={color} />;

export const Home: React.FC<Iconprops> = ({ size = 30, color = "white" }) => (
  <FontAwesome name="home" size={size} color={color} />
);

export const Search: React.FC<Iconprops> = ({ size = 30, color = "white" }) => (
  <AntDesign name="search1" size={size} color={color} />
);

export const Login: React.FC<Iconprops> = ({ size = 30, color = "white" }) => (
  <AntDesign name="login" size={size} color={color} />
);
export const Location: React.FC<Iconprops> = ({
  size = 30,
  color = "hsla(215, 24%, 39%, 1)",
}) => <Entypo name="location-pin" size={size} color={color} />;

export const Services: React.FC<Iconprops> = ({
  size = 30,
  color = "white",
}) => <MaterialIcons name="medical-services" size={size} color={color} />;
export const LeftArrow: React.FC<Iconprops> = ({
  size = 25,
  color = "hsla(215, 24%, 39%, 1)",
}) => <AntDesign name="arrowleft" size={size} color={color} />;
export const Share: React.FC<Iconprops> = ({ size = 25, color = "white" }) => (
  <Entypo name="share" size={size} color={color} />
);

export const OutLineHeart: React.FC<Iconprops> = ({
  size = 25,
  color = "hsla(215, 24%, 39%, 1)",
  handler,
}) => <AntDesign name="hearto" size={size} color={color} onPress={handler} />;
export const Heart: React.FC<Iconprops> = ({
  size = 25,
  color = "hsla(212, 52%, 23%, 1)",
  handler,
}) => <Entypo name="heart" size={size} color={color} onPress={handler} />;
export const Clinic: React.FC<Iconprops> = ({ size = 25, color = "red" }) => (
  <FontAwesome5 name="clinic-medical" size={size} color={color} />
);
export const Doctor: React.FC<Iconprops> = ({ size = 25, color = "red" }) => (
  <Fontisto name="doctor" size={size} color={color} />
);
export const Email: React.FC<Iconprops> = ({
  size = 20,
  color = "hsla(210, 1%, 78%, 1)",
}) => <Fontisto name="email" size={size} color={color} />;
export const User: React.FC<Iconprops> = ({
  size = 20,
  color = "hsla(210, 1%, 78%, 1)",
}) => <AntDesign name="user" size={size} color={color} />;
export const UnLock: React.FC<Iconprops> = ({
  size = 20,
  color = "hsla(210, 1%, 78%, 1)",
}) => <AntDesign name="unlock" size={size} color={color} />;

export const ThreeDotVertical: React.FC<Iconprops> = ({
  size = 20,
  color = "hsla(215, 24%, 39%, 1)",
}) => <Entypo name="dots-three-vertical" size={size} color={color} />;

export const Bell: React.FC<Iconprops> = ({
  size = 20,
  color = "hsla(215, 24%, 39%, 1)",
}) => <Fontisto name="bell-alt" size={size} color={color} />;

export const OutLineLocation: React.FC<Iconprops> = ({
  size = 25,
  color = "hsla(215, 24%, 39%, 1)",
}) => <EvilIcons name="location" size={size} color={color} />;
export const PatientIcon: React.FC<Iconprops> = ({
  size = 30,
  color = "hsla(215, 24%, 39%, 1)",
}) => <FontAwesome5 name="user-friends" size={size} color={color} />;
export const Chat: React.FC<Iconprops> = ({
  size = 30,
  color = "hsla(215, 24%, 39%, 1)",
}) => <Entypo name="chat" size={size} color={color} />;
export const Clock: React.FC<Iconprops> = ({
  size = 30,
  color = "hsla(215, 24%, 39%, 1)",
}) => <AntDesign name="clockcircle" size={size} color={color} />;
export const Star: React.FC<Iconprops> = ({
  size = 30,
  color = "hsla(215, 24%, 39%, 1)",
}) => <AntDesign name="star" size={size} color={color} />;

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { CommonSection } from "../CommonSection";
import { Colors } from "../../constants/Colors";
import { LocationIcon } from "../../assets/icons/LocationIcon";
import { ClockIcon } from "../../assets/icons/ClockIcon";
import { StarIcon } from "../../assets/icons/StarIcon";
import { NearMeItem } from "../NearMeItem";

const list = [
  {
    name: "Dapur Ijah Restaurant",
    image: require("../../assets/imgs/shopimg.png"),
    address: "13 th Street, 46 W 12th St, NY",
    time: "3 min - 1.1 km",
    start: 5,
  },
  {
    name: "Dapur Ijah Restaurant",
    image: require("../../assets/imgs/texaxchicken.png"),
    address: "Texas Chicken - Hoàng Văn Thụ",
    time: "3 min - 1.1 km",
    start: 4,
  },
  {
    name: "Yi He Kao Nai - Trà Sữa Nướng Vân Nam - Kha Vạn Cân",
    image: require("../../assets/imgs/trasua.png"),
    address: "588 Kha Vạn Cân, P. Linh Đông, Thành Phố Thủ Đức, TP. HCM",
    time: "3 min - 1.1 km",
    start: 2,
  },
];

export const NearMeList = () => {
  return (
    <CommonSection title="Near Me">

        <View style={[styles.list]}>
          {list.map((item, index) => {
            return <NearMeItem {...item} key={index} />;
          })}
        </View>
    </CommonSection>
  );
};

const styles = StyleSheet.create({
  list: {
    rowGap: 20,
    paddingHorizontal: 30,
  },
});

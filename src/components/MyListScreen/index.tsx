import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ShopItem } from "../ShopItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { isIOSPlatform } from "../../helpers/isIOSPlatform";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BackIcon } from "../../assets/icons/BackIcon";

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
  {
    name: "Yi He Kao Nai - Trà Sữa Nướng Vân Nam - Kha Vạn Cân",
    image: require("../../assets/imgs/trasua.png"),
    address: "588 Kha Vạn Cân, P. Linh Đông, Thành Phố Thủ Đức, TP. HCM",
    time: "3 min - 1.1 km",
    start: 2,
  },
  {
    name: "Yi He Kao Nai - Trà Sữa Nướng Vân Nam - Kha Vạn Cân",
    image: require("../../assets/imgs/trasua.png"),
    address: "588 Kha Vạn Cân, P. Linh Đông, Thành Phố Thủ Đức, TP. HCM",
    time: "3 min - 1.1 km",
    start: 2,
  },
];

export const MyListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.COLOR_FFFFFF,
        paddingTop: isIOSPlatform ? 20 : 0,
      }}
    >
      <View style={styles.container}>
        <View style={[styles.containerPadding, styles.backBtn]}>
          <TouchableOpacity
            style={[styles.backContainer]}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackIcon width={24} height={16} />
          </TouchableOpacity>
          <Text style={[styles.title]}>My List</Text>
        </View>
        <ScrollView style={[styles.containerPadding]}>
          <View style={[{ paddingTop: 30 }]}>
            <View style={[styles.list]}>
              {list.map((item, index) => {
                return <ShopItem isSave {...item} key={index} />;
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    rowGap: 20,
  },
  addressWrapper: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    paddingBottom: 30,
  },
  containerPadding: {
    paddingHorizontal: 30,
  },
  backContainer: {
    padding: 7.5,
    position: "absolute",
    left: 30,
    zIndex: 1,
  },
  backBtn: {},
  title: {
    color: Colors.COLOR_000000,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

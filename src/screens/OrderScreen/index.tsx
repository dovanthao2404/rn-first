import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { TextField } from "../../components/TextField";
import { SearchInput } from "../../components/SearchInput";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { LocationIcon } from "../../assets/icons/LocationIcon";
import { CategoryList } from "../../components/CategoryList";
import { CoffeeCupIcon } from "../../assets/icons/CoffeeCupIcon";
import { CommonSection } from "../../components/CommonSection";
import { FoodMenuList } from "../../components/FoodMenuList";
import { NearMeList } from "../../components/NearMeList";
import { isIOSPlatform } from "../../helpers/isIOSPlatform";
import { OrderHistory } from "../../components/OrderHistory";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BackIcon } from "../../assets/icons/BackIcon";

const list = [
  {
    name: "Drink",
    icon: <CoffeeCupIcon />,
  },
  {
    name: "Food",
    icon: <CoffeeCupIcon />,
  },
  {
    name: "Cake",
    icon: <CoffeeCupIcon />,
  },
  {
    name: "Snack",
    icon: <CoffeeCupIcon />,
  },
];

export const OrderScreen = () => {
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
        <View style={[styles.containerPadding, styles.backBtn, ]}>
          <TouchableOpacity
            style={[styles.backContainer]}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackIcon width={24} height={16} />
          </TouchableOpacity>
          <Text style={[styles.title]}>Order</Text>
        </View>
        <ScrollView style={styles.containerPadding}>
          <OrderHistory />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    zIndex: 1
  },
  backBtn: {
  },
  title: {
    color: Colors.COLOR_000000,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },

});

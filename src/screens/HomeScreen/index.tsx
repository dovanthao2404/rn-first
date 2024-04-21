import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.COLOR_FFFFFF,
        paddingTop: isIOSPlatform ? 20 : 0,
      }}
    >
      <View style={styles.container}>
        <View style={styles.containerPadding}>
          <SearchInput />
        </View>
        <View style={[styles.addressWrapper, styles.containerPadding]}>
          <LocationIcon />
          <Text>9 West 46 Th Street, New York City</Text>
        </View>
        <ScrollView>
          <View>
            <CategoryList itemList={list} />
          </View>
          <View style={{ marginTop: 30 }}>
            <FoodMenuList />
          </View>
          <View style={{ marginTop: 20 }}>
            <NearMeList />
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
});

export default HomeScreen;

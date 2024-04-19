import { ComponentType, memo } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { BackIcon } from "../../assets/icons/BackIcon";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { KeyboardAvoiding } from "../KeyboardAvoiding";

interface Props {
  children: React.ReactNode;
}

export const withAuthWrapper = (WrappedComponent: ComponentType) => {
  return () => {
    const navigation =
      useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
      <SafeAreaView style={styles.box}>
        <View style={{ flex: 1 }}>
          <View style={[styles.container, styles.backBtn]}>
            <TouchableOpacity
              style={[styles.backContainer]}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <BackIcon width={24} height={16} />
            </TouchableOpacity>
          </View>
            <KeyboardAvoiding>
              <View
                style={{
                  height: "100%"
                }}
              >
                <View style={[styles.container, styles.center]}>
                  <WrappedComponent />
                </View>

                  <Image
                    source={require("../../assets/imgs/PngItem_39514.png")}
                  />
              </View>
            </KeyboardAvoiding>
        </View>
      </SafeAreaView>
    );
  };
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: Colors.COLOR_FFFFFF,
  },
  container: {
    paddingRight: 30,
    paddingLeft: 30,
  },
  center: {
    flex: 1,
    justifyContent: "center",
  },
  backBtn: {
    marginTop: 30,
  },
  backContainer: {
    padding: 7.5,
  },
  inner: {},
});

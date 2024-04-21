import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { isIOSPlatform } from "../../helpers/isIOSPlatform";

export const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.COLOR_FFFFFF,
        paddingTop: isIOSPlatform ? 20 : 0,
      }}
    >
      <Text>hihi</Text>
    </SafeAreaView>
  );
};

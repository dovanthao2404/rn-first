import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { isIOSPlatform } from "../../helpers/isIOSPlatform";
import { BackIcon } from "../../assets/icons/BackIcon";
import { CommonButton } from "../../components/CommonButton";
import { signOut } from "aws-amplify/auth";
import { useSetRecoilState } from "recoil";
import { userState } from "../../globalState/userState";

export const ProfileScreen = () => {
  const setUserStateValue = useSetRecoilState(userState);
  const handleSignOut = async () => {
    try {
      await signOut();
      setUserStateValue({ isLoggedIn: false });
    } catch {
      setUserStateValue({ isLoggedIn: false });
    }
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flex: 1,
          paddingTop: isIOSPlatform ? 20 : 0,

        },
      ]}
    >
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <View style={styles.profile}>
          <Image
            style={styles.avatarImage}
            source={require("../../assets/imgs/avatar.png")}
          />
          <Text style={styles.name}>Thao</Text>
          <Text style={styles.phoneNumber}>+84 905550453</Text>
        </View>
        <ScrollView>
          <View style={styles.accountActionList}>
            <View style={styles.accountActionItem}>
              <Text style={styles.accountText}>My Profile</Text>
              <BackIcon rotation={180} width={6} height={12} />
            </View>
            <View style={styles.accountActionItem}>
              <Text style={styles.accountText}>Change Password</Text>
              <BackIcon rotation={180} width={6} height={12} />
            </View>
            <View style={styles.accountActionItem}>
              <Text style={styles.accountText}>Payment Settings</Text>
              <BackIcon rotation={180} width={6} height={12} />
            </View>
            <View style={styles.accountActionItem}>
              <Text style={styles.accountText}>My Voucher</Text>
              <BackIcon rotation={180} width={6} height={12} />
            </View>
            <View style={styles.accountActionItem}>
              <Text style={styles.accountText}>Notification</Text>
              <BackIcon rotation={180} width={6} height={12} />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ marginBottom: 10,  }}>
        <CommonButton
          onPress={handleSignOut}
          color={Colors.COLOR_000000}
          backgroundColor={Colors.COLOR_00000040}
          title="Sign Out"
          width={"100%"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  profile: {
    alignItems: "center",
    marginTop: 30,
  },
  avatarImage: {
    width: 150,
    height: 150,
    objectFit: "contain",
    borderRadius: 1000,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  phoneNumber: {
    marginTop: 4,
  },
  accountActionList: {
    marginTop: 28,
  },
  accountActionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  accountText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

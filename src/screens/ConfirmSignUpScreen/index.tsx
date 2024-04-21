import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BackIcon } from "../../assets/icons/BackIcon";
import { Colors } from "../../constants/Colors";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { OTPInput } from "../../components/OTPInput";
import { useState } from "react";
import { CommonButton } from "../../components/CommonButton";
import { confirmSignUp } from "aws-amplify/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
export type ParamList = {
  SignUp: {
    username: string;
  };
};

export const ConfirmSignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<ParamList, "SignUp">>();


  const [code, setCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);

  async function handleSignUp({ username }: { username: string }) {
    try {
      if (isPinReady) {
        const { isSignUpComplete, nextStep } = await confirmSignUp({
          username,
          confirmationCode: code,
          options: {
            autoSignIn: true
          }
        });
        if (isSignUpComplete) {
          navigation.replace("SignIn")
        }
      }
    } catch (error) {}
  }

  return (
    <SafeAreaView style={styles.box}>
      <View style={[styles.container, styles.backBtn]}>
        <View>
          <TouchableOpacity
            style={[styles.backContainer]}
            onPress={() => {
              navigation.replace("SignUp");
            }}
          >
            <BackIcon width={24} height={16} />
          </TouchableOpacity>
          <View
            style={{
              position: "absolute",
              width: "100%",
              top: 0,
              left: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={[styles.headerTitle]}>OTP Verification</Text>
          </View>
        </View>
        <View style={[styles.titleContainer]}>
          <Text style={[styles.title]}>
            <Text>Please Enter{"\n"}OTP Verification</Text>
          </Text>
          <Text style={[styles.resentOTPText]}>Resend OTP Again in 00:00</Text>
        </View>
        <View style={[styles.inputOTPArea]}>
          <OTPInput
            code={code}
            maximumLength={6}
            setCode={setCode}
            setIsPinReady={setIsPinReady}
          />

          <Text style={[styles.resentBtn]}>Resend OTP</Text>
        </View>
        <View style={[styles.btnSubmit]}>
          <CommonButton
            title="Submit"
            onPress={() => {
              handleSignUp({ username: route.params.username });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
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
  backBtn: {
    marginTop: 30,
  },
  backContainer: {
    padding: 7.5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
  },
  titleContainer: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  resentOTPText: {
    marginTop: 12,
  },
  otpContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInputHidden: {
    width: 300,
    borderColor: "#e5e5",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
  },
  inputOTPArea: {
    marginTop: 30,
  },
  resentBtn: {
    marginTop: 30,
    color: Colors.COLOR_D35400,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  btnSubmit: {
    marginTop: 30,
    alignItems: "center",
  },
});

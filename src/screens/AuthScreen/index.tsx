import * as React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { CommonButton } from "../../components/CommonButton";
import { Colors } from "../../constants/Colors";
import { confirmSignUp, signUp } from "aws-amplify/auth";
type SignUpParameters = {
  username: string;
  password: string;
  email: string;
};
export const AuthScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigate = (target: string) => () => navigation.navigate(target);

  async function handleSignUp({ username, password, email }: SignUpParameters) {
    try {
      // const { isSignUpComplete, userId, nextStep } = await signUp({
      //   username,
      //   password,
      //   options: {
      //     userAttributes: {
      //       email,
      //     },
      //   },
      // });
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode: "143036"
      });
      console.log({ isSignUpComplete,  nextStep });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
  return (
    <>
      <View style={styles.centered}>
        <Image source={require("../../assets/imgs/hamburger 1.png")} />
        <View style={styles.btnContainer}>
          <CommonButton
            title="Sign In"
            width={320}
            onPress={navigate("SignIn")}
          />
          <CommonButton
            title="Sign Up"
            backgroundColor={Colors.COLOR_ECF0F1}
            textColor={Colors.COLOR_000000}
            width={320}
            onPress={navigate("SignUp")}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centered: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.COLOR_FFFFFF,
  },

  btnContainer: {
    rowGap: 20,
    marginTop: 60,
  },
});

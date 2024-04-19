import * as React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";
import { Button, Text } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { CommonButton } from "../components/CommonButton";
import {
  confirmSignIn,
  signIn,
  signOut,
  type SignInInput,
} from "aws-amplify/auth";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() => {
          signOut();
        }}
      />
      <CommonButton
        onPress={() => {
          async function handleSignIn({ username, password }: SignInInput) {
            try {
              const result = await signIn({
                username,
                password,
                options: {
                  authFlowType: "USER_PASSWORD_AUTH",
                },
              });

            } catch (error) {
            }
          }
          handleSignIn({ username: "hihi", password: "abcd12345" });
        }}
        title="hihi"
      />
    </>
  );
};

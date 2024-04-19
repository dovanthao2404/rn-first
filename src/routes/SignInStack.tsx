import * as React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {  Text } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { SignInScreen } from "../screens/SignInScreen";


export const SignInStack = () => {
  return <SignInScreen />;

};

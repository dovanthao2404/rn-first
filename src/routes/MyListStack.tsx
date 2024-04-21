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
  signIn,
  signOut,
  type SignInInput,
} from "aws-amplify/auth";
import { OrderScreen } from "../screens/OrderScreen";
import { MyListScreen } from "../components/MyListScreen";

const Stack = createNativeStackNavigator();

export const MyListStack = () => {
  return (
    <MyListScreen/>
  );
};

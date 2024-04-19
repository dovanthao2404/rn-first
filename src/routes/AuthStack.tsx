import * as React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthScreen } from "../screens/AuthScreen";

export const AuthStack = () => {
  return <AuthScreen />;
};

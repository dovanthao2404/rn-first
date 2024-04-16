import * as React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";
import { Button, Text } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.replace("Profile")}
      />
    </Text>
  );
};

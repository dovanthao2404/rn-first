import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { HomeStack } from "./HomeStack";

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
      >
        <RootStack.Screen name="App" component={HomeStack} />
        <Stack.Screen name="Profile" component={() => <Text>Profile</Text>} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

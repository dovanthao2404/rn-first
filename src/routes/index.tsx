import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { HomeStack } from "./HomeStack";
import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
  signOut,
} from "aws-amplify/auth";
import { AuthStack } from "./AuthStack";
import { SignInStack } from "./SignInStack";
import { SignUpStack } from "./SignUpStack";
import { withAuthWrapper } from "../components/AuthWrapper";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../globalState/userState";
import { ConfirmSignUpStack } from "./ConfirmSignUpStack";
import { Tabs } from "../navigation";

const Stack = createNativeStackNavigator();

const SignInWithWrapper = withAuthWrapper(SignInStack);
const SignUpWithWrapper = withAuthWrapper(SignUpStack);

export const Routes = () => {
  const [userStateValue, setUserStateValue] = useRecoilState(userState);
  useEffect(() => {
    (async () => {
      try {
        await getCurrentUser();
        console.log("runtren")
        setUserStateValue({ isLoggedIn: true });
      } catch (err) {
        console.log("run-duoi")
        setUserStateValue({ isLoggedIn: false });
      }
    })();
  }, [userStateValue.isLoggedIn]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
        initialRouteName={!userStateValue.isLoggedIn ? "Auth" : "Home"}
      >
        {!userStateValue.isLoggedIn ? (
          <>
            <Stack.Screen
              name="Auth"
              component={AuthStack}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignInWithWrapper}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpWithWrapper}
              options={{ animation: "none" }}
            />
             <Stack.Screen
              name="ConfirmSignUp"
              component={ConfirmSignUpStack}
              options={{ animation: "none" }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="App" component={Tabs} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

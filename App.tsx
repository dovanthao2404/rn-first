import * as React from "react";
import { Platform, View } from "react-native";
import Routes from "./src/routes";
import { StatusBarCustom } from "./src/components/StatusBarCustom";
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { Colors } from "./src/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

Amplify.configure(amplifyconfig);

const App = () => {
  return (
    <RecoilRoot>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.COLOR_FFFFFF }}>
        <StatusBarCustom
          barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
          backgroundColor={Colors.COLOR_FFFFFF}
        />
        <Routes />
      </SafeAreaView>
    </RecoilRoot>
  );
};

export default App;

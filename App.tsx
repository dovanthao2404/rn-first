import * as React from "react";
import { Platform, View } from "react-native";
import Routes from "./src/routes";
import { StatusBarCustom } from "./src/components/StatusBarCustom";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBarCustom
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        backgroundColor={"blue"}
      />
      <Routes />
    </View>
  );
};

export default App;

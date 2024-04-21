import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { ShoppingIcon } from "../assets/icons/ShoppingIcon";
import { RectangleIcon } from "../assets/icons/RectangleIcon";
import { UserIcon } from "../assets/icons/UserIcon";
import { SvgProps } from "react-native-svg";
import { Colors } from "../constants/Colors";
import { CustomTabBar } from "../components/CustomTabBar";
import { LabelPosition } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
interface ScreenTab {
  screenName: string;
  screenComponent: FC;
  Icon: (props: SvgProps) => React.JSX.Element;
  item?: LabelPosition;
}

const Tab = createBottomTabNavigator();

const screens: ScreenTab[] = [
  {
    screenName: "Home",
    screenComponent: HomeScreen,
    Icon: HomeIcon,
  },
  {
    screenName: "Order",
    screenComponent: HomeScreen,
    Icon: ShoppingIcon,
  },
  {
    screenName: "My List",
    screenComponent: HomeScreen,
    Icon: RectangleIcon,
  },
  {
    screenName: "Profile",
    screenComponent: HomeScreen,
    Icon: UserIcon,
  },
];

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          paddingHorizontal: "10%",
          elevation: 0,   // for Android
          borderTopWidth: 0

        },
        tabBarItemStyle: {
        },
        tabBarShowLabel: false,
      }}
    >
      {screens.map(({ screenName, screenComponent, Icon }) => (
        <Tab.Screen
          key={`tab-${screenName}`}
          name={screenName}
          component={screenComponent}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  position: "absolute",
                  top: 20,
                }}
              >
                <Icon
                  fill={!focused ? Colors.COLOR_00000050 : Colors.COLOR_D35400}
                />
                <Text
                  style={{
                    color: !focused
                      ? Colors.COLOR_00000050
                      : Colors.COLOR_D35400,
                      fontSize: 12
                  }}
                >
                  {screenName}
                </Text>
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
    elevation: 0,
  },
});

import React from 'react';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { Colors } from '../../constants/Colors';

export const CustomTabBar = (props: BottomTabBarProps) =>
  isIphoneX() ? (
    <View>
      <View style={styles.container}></View>
      <BottomTabBar {...props} />
    </View>
  ) : (
    <BottomTabBar {...props} />
  );

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: Colors.COLOR_D35400,
  }
});
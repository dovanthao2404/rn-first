import React, { FC, ReactNode } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";

type Props = {
  children: ReactNode;
};
export const KeyboardAvoiding = ({ children }: Props) => {
  return (
    <KeyboardAvoidingView
      contentContainerStyle={{ flex: 1, backgroundColor: "red" }}
      behavior={"height"}
      style={styles.container}
      keyboardVerticalOffset={-70}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

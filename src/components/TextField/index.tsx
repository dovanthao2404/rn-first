import {
  Keyboard,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { FC } from "react";

export const TextField: FC<TextInputProps> = (rest) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View />
      </TouchableWithoutFeedback>
      <TextInput
        placeholdercolor={Colors.COLOR_00000080}
        style={styles.input}
        {...rest}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 30,
    backgroundColor: Colors.COLOR_ECF0F1,
    shadowColor: Colors.COLOR_00000040,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    paddingHorizontal: 30,
    paddingVertical: 16,
    fontSize: 14,
  },
});

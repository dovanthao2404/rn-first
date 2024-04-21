import {
  Dimensions,
  Keyboard,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { FC } from "react";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { isIOSPlatform } from "../../helpers/isIOSPlatform";

export const SearchInput: FC<TextInputProps> = (rest) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View />
      </TouchableWithoutFeedback>
      <View style={[styles.searchWrapper]}>
        <SearchIcon
          style={[
            styles.searchIcon,
          ]}
        />
        <TextInput
          placeholdercolor={Colors.COLOR_00000080}
          style={styles.input}
          placeholder="Search"
          {...rest}
        />
      </View>
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
    paddingVertical: 16,
    fontSize: 14,
    paddingLeft: 50,
    borderWidth: 0,

  },
  searchWrapper: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 20,
    zIndex: 1,
    top: isIOSPlatform ? 16 : 20,
    marginVertical: "auto",
    width: 20,
    height: 20,
    transform: [
      // {
      //   translateY:
      // },
    ],
    // position: "absolute",
    // right: 0,
    // left: 0,
    // top: 0,
    // bottom: 0,
    // margin: "auto",
  },
});

import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  code: string;
  setCode?: any;
  maximumLength: number;
  setIsPinReady?: any;
};

export const OTPInput = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
}: Props) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef<MutableRefObject<TextInput | undefined>>();

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const boxDigit = (_, index: number) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    if (isInputBoxFocused && isValueFocused) {
      return (
        <TouchableOpacity onPress={handleOnPress}>
          <View style={[styles.splitBox, styles.sptBoxFocus]} key={index}>
            <Text style={[styles.splitBoxText]}>{digit}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={[styles.splitBox]} key={index}>
        <Text style={[styles.splitBoxText]}>{digit}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.otpContainer]}>
      <View style={[styles.splitContainer]}>{boxArray.map(boxDigit)}</View>
      <TextInput
        style={[styles.textInputHidden]}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        keyboardType="numeric"
        onBlur={handleOnBlur}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  otpContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInputHidden: {
    height: "100%",
    borderWidth: 1,
    borderRadius: 5,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
  },
  splitContainer: {
    flexDirection: "row",
    gap: 10,
  },
  splitBox: {
    borderColor: "#e5e5e5",
    borderWidth: 2,
    borderRadius: 5,
    minWidth: 40,
    height: 40,
    justifyContent: "center",
  },
  splitBoxText: {
    fontSize: 20,
    textAlign: "center",
    color: "#e5e5e5",
  },
  sptBoxFocus: {
    borderColor: "#ecdbba",
    backgroundColor: "grey",
  },
});

import { memo } from "react";
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { Colors } from "../../constants/Colors";

interface CommonButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  backgroundColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  fontSize?: number;
  width?: DimensionValue;
}

export const CommonButton: React.FC<CommonButtonProps> = memo(
  ({
    onPress,
    title,
    fontSize = 18,
    color = Colors.COLOR_FFFFFF,
    backgroundColor = Colors.COLOR_D35400,
    width = 200,
    ...rest
  }) => {
    const buttonTextStyles: TextStyle = {
      color: color,
      fontSize: fontSize,
    };

    const buttonContainerStyle: StyleProp<ViewStyle> = {
      width,
      backgroundColor,
    };
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonStyle, buttonContainerStyle]}
        {...rest}
      >
        <Text
          onPress={onPress}
          adjustsFontSizeToFit={true}
          style={[styles.btnText, buttonTextStyles]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonStyle: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 30,
    paddingTop: 12,
    paddingBottom: 12,
  },
});

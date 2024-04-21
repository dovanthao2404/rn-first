import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";

export const CategoryItem = ({
  name,
  icon,
}: {
  name: string;
  icon: React.JSX.Element;
}) => {
  return (
    <View>
      <View style={[styles.itemContent]}>
        <View>{icon}</View>
      </View>
      <Text style={[styles.categoryName]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContent: {
    width: 70,
    height: 70,
    backgroundColor: Colors.COLOR_ECF0F1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  categoryName: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 5,
  },
});

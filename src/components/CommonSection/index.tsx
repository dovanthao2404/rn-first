import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  children: React.JSX.Element;
};

export const CommonSection: FC<Props> = ({ title, children }) => {
  return (
    <View>
      <View style={[styles.container, styles.titleWrapper]}>
        <Text style={[styles.title]}>{title}</Text>
        <Text>View all</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

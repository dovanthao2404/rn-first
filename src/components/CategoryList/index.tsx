import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CategoryItem } from "../CategoryItem";

type Props = {
  itemList: { name: string; icon: React.JSX.Element }[];
};

export const CategoryList = ({ itemList }: Props) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={[styles.list]}>
        {itemList?.map((item, index) => (
          <CategoryItem key={index} name={item.name} icon={item.icon} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    columnGap: 40,
    flexDirection: "row",
    paddingHorizontal: 30,
  },
});

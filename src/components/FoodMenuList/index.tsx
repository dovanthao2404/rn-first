import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { CommonSection } from "../CommonSection";
import { Colors } from "../../constants/Colors";

const list = [
  {
    name: "Burgers",
    image: require("../../assets/imgs/hamberger.png"),
  },
  {
    name: "Fruit",
    image: require("../../assets/imgs/fruit.png"),
  },
  {
    name: "Pizza",
    image: require("../../assets/imgs/pizza.png"),
  },
  {
    name: "Sushi",
    image: require("../../assets/imgs/sushi.png"),
  },
  {
    name: "BBQ",
    image: require("../../assets/imgs/bbq.png"),
  },
  {
    name: "Noodle",
    image: require("../../assets/imgs/noddle.png"),
  },
];

export const FoodMenuList = () => {
  const renderItem = () => {
    const itemRender = [];
    for (let i = 0; i < list.length; i += 2) {
      const itemFirst = list[i];
      const itemSecond = list[i + 1];
      const isEven = (i / 2) % 2 == 0;
      itemRender.push(
        <View style={[styles.item]}>
          <View
            style={[
              styles.itemContent,
              {
                backgroundColor: !isEven
                  ? Colors.COLOR_9B59B6
                  : Colors.COLOR_3498DB30,
              },
            ]}
          >
            <Text style={[styles.itemContentTitle]}>{itemFirst.name}</Text>
            <View
              style={{
                position: "absolute",
                bottom: -28,
                right: -30,
              }}
            >
              <Image
                source={itemFirst.image}
                style={{
                  resizeMode: "contain",
                  flex: 1,
                  aspectRatio: 1,
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
          </View>
          {itemSecond && (
            <View
              style={[
                styles.itemContent,
                {
                  backgroundColor: isEven
                    ? Colors.COLOR_9B59B6
                    : Colors.COLOR_3498DB30,
                },
              ]}
            >
              <Text style={[styles.itemContentTitle]}>{itemSecond.name}</Text>
              <View
                style={{
                  position: "absolute",
                  bottom: -28,
                  right: -30,
                }}
              >
                <Image
                  source={itemSecond.image}
                  style={{
                    resizeMode: "contain",
                    flex: 1,
                    aspectRatio: 1,
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </View>
            </View>
          )}
        </View>
      );
    }
    return itemRender;
  };

  return (
    <CommonSection title="Food Menu">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.list]}>{renderItem()}</View>
      </ScrollView>
    </CommonSection>
  );
};

const styles = StyleSheet.create({
  list: {
    columnGap: 20,
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  item: {
    rowGap: 20,
  },
  itemContent: {
    backgroundColor: Colors.COLOR_3498DB30,
    borderRadius: 20,
    width: 130,
    height: 130,
    position: "relative",
    overflow: "hidden",
  },
  itemContentTitle: {
    position: "absolute",
    top: 10,
    left: 15,
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.COLOR_FFFFFF,
  },
});

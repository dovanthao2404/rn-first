import { Image, StyleSheet, Text, View } from "react-native";
import { LocationIcon } from "../../assets/icons/LocationIcon";
import { Colors } from "../../constants/Colors";
import { StarIcon } from "../../assets/icons/StarIcon";
import { ClockIcon } from "../../assets/icons/ClockIcon";
import { RectangleIcon } from "../../assets/icons/RectangleIcon";

type Props = {
  name: string;
  image: any;
  address: string;
  time: string;
  start: number;
  isSave?: boolean;
};
export const ShopItem = ({
  name,
  image,
  address,
  time,
  start,
  isSave,
}: Props) => {
  return (
    <View style={[styles.item]}>
      <View>
        <Image style={[styles.image]} source={image} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.itemTitle]} numberOfLines={1}>
          {name}
        </Text>
        <View style={[styles.itemAddress]}>
          <LocationIcon width={8.25} height={12} fill={Colors.COLOR_34495E} />
          <Text style={[styles.itemAddressText]} numberOfLines={2}>
            {address}
          </Text>
        </View>
        <View style={[styles.itemAddress, styles.itemClock]}>
          <ClockIcon fill={Colors.COLOR_34495E} />
          <Text style={[styles.itemAddressText]}>{time}</Text>
        </View>
        <View style={[styles.itemAddress, styles.itemStar]}>
          {Array(start)
            .fill(Boolean)
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </View>
        {isSave && <RectangleIcon style={[styles.saveShop]} />}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    columnGap: 20,
    flexDirection: "row",
    borderRadius: 20,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    flexWrap: "wrap",
    width: "auto",
  },
  itemAddress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    color: Colors.COLOR_34495E,
  },
  itemAddressText: {
    fontSize: 12,
    flexWrap: "wrap",
  },
  itemClock: {
    marginTop: 8,
  },
  itemStar: {
    marginTop: 8,
    gap: 2.5,
  },
  image: {
    width: 130,
    height: 130,
    objectFit: "cover",
    borderRadius: 20,
  },
  saveShop: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

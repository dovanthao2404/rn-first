import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { LikeIcon } from "../../assets/icons/LikeIcon";
import { Colors } from "../../constants/Colors";

const list = [
  {
    image: require("../../assets/imgs/shopimg.png"),
    name: "Dogmie jagong tutung",
    likeTotal: "999+",
    dislikeTotal: "10+",
    liked: false,
    disliked: true,
    totalPrice: "%99.99",
    id: 1,
  },
  {
    image: require("../../assets/imgs/sinhtodao.png"),
    name: "Sinh tố đào",
    likeTotal: "10+",
    dislikeTotal: "10+",
    liked: true,
    disliked: false,
    totalPrice: "%99.99",
    id: 2,
  },
  {
    image: require("../../assets/imgs/chuoidau.png"),
    name: "Sinh Tố chuối dâu",
    likeTotal: "10+",
    dislikeTotal: "10+",
    liked: true,
    disliked: false,
    totalPrice: "%99.99",
    id: 3,
  },
  {
    image: require("../../assets/imgs/shopimg.png"),
    name: "Dogmie jagong tutung",
    likeTotal: "999+",
    dislikeTotal: "10+",
    liked: false,
    disliked: true,
    totalPrice: "%99.99",
    id: 4,
  },
  {
    image: require("../../assets/imgs/sinhtodao.png"),
    name: "Sinh tố đào",
    likeTotal: "10+",
    dislikeTotal: "10+",
    liked: true,
    disliked: false,
    totalPrice: "%99.99",
    id: 5,
  },
  {
    image: require("../../assets/imgs/chuoidau.png"),
    name: "Sinh Tố chuối dâu",
    likeTotal: "10+",
    dislikeTotal: "10+",
    liked: true,
    disliked: false,
    totalPrice: "%99.99",
    id: 6,
  },
  {
    image: require("../../assets/imgs/shopimg.png"),
    name: "Dogmie jagong tutung",
    likeTotal: "999+",
    dislikeTotal: "10+",
    liked: false,
    disliked: true,
    totalPrice: "%99.99",
    id: 7,
  },
  {
    image: require("../../assets/imgs/sinhtodao.png"),
    name: "Sinh tố đào",
    likeTotal: "10+",
    dislikeTotal: "10+",
    liked: true,
    disliked: false,
    totalPrice: "%99.99",
    id: 8,
  },
  {
    image: require("../../assets/imgs/chuoidau.png"),
    name: "Sinh Tố chuối dâu",
    likeTotal: "10+",
    dislikeTotal: "10+",
    liked: true,
    disliked: false,
    totalPrice: "%99.99",
    id: 9,
  },
  {
    image: require("../../assets/imgs/shopimg.png"),
    name: "Dogmie jagong tutung",
    likeTotal: "999+",
    dislikeTotal: "10+",
    liked: false,
    disliked: true,
    totalPrice: "%99.99",
    id: 10,
  },
  {
    image: require("../../assets/imgs/sinhtodao.png"),
    name: "Sinh tố đào",
    likeTotal: "10+",
    dislikeTotal: "10+",
    liked: true,
    disliked: false,
    totalPrice: "%99.99",
    id: 11,
  },
  {
    image: require("../../assets/imgs/chuoidau.png"),
    name: "Sinh Tố chuối dâu",
    likeTotal: "10+",
    dislikeTotal: "10+",
    liked: true,
    disliked: false,
    totalPrice: "%99.99",
    id: 12,
  },
];

export const OrderHistory = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ rowGap: 20 }}>
        {list.map(
          ({
            image,
            name,
            dislikeTotal,
            disliked,
            likeTotal,
            liked,
            id,
            totalPrice,
          }) => {
            return (
              <View style={[styles.item]} key={id}>
                <Image style={[styles.image]} source={image} />
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <View>
                    <Text style={[styles.name]}>{name}</Text>
                  </View>
                  <View style={[styles.vote]}>
                    <View style={[styles.voteCount]}>
                      <View style={[styles.voteCountItem]}>
                        <LikeIcon />
                        <Text>{likeTotal}</Text>
                      </View>
                      <Text>|</Text>
                      <View style={[styles.voteCountItem]}>
                        <LikeIcon
                          style={{ transform: [{ rotate: "180deg" }] }}
                        />
                        <Text>{dislikeTotal}</Text>
                      </View>
                    </View>
                    <View style={[styles.voteAction]}>
                      <View
                        style={[
                          styles.voteActionIcon,
                          {
                            backgroundColor: !liked
                              ? Colors.COLOR_ECF0F1
                              : Colors.COLOR_D35400,
                          },
                        ]}
                      >
                        <LikeIcon
                          fill={liked ? Colors.COLOR_FFFFFF : undefined}
                        />
                      </View>
                      <View
                        style={[
                          styles.voteActionIcon,
                          {
                            backgroundColor: !disliked
                              ? Colors.COLOR_ECF0F1
                              : Colors.COLOR_D35400,
                          },
                        ]}
                      >
                        <LikeIcon
                          fill={disliked ? Colors.COLOR_FFFFFF : undefined}
                          style={{ transform: [{ rotate: "180deg" }] }}
                        />
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.money}>{totalPrice}</Text>
                  </View>
                </View>
              </View>
            );
          }
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    height: 80,
    width: 80,
  },
  item: {
    flex: 1,
    columnGap: 20,
    flexDirection: "row",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  vote: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  voteCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  voteCountItem: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  voteAction: {
    flexDirection: "row",
    columnGap: 10,
  },
  voteActionIcon: {
    width: 18,
    height: 18,
    justifyContent: "center",
    borderRadius: 1000,
    alignItems: "center",
  },
  money: {
    color: Colors.COLOR_2ECC71,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
});

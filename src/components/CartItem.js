import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const CartItem = ({ item, removeItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.title}</Text>
        <View style={styles.container001}>
          <View style={styles.container002}>
            <Text style={styles.text2}>- Cantidad: {item.quantity} </Text>
            <Text style={styles.text2}>- Precio: $ {item.price}</Text>
          </View>
          <Entypo
            name="trash"
            size={25}
            color="black"
            style={styles.item}
            onPress={removeItem}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#20b2aa",
    width: "auto",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2f4f4f",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  text1: {
    fontSize: 28,
    width: 360,
    color: "#000000",
    fontWeight: "400",
    margin: 5,
    padding: 5,
    borderBottomWidth: 2,
    letterSpacing: 1,
  },
  text2: {
    fontSize: 22,
    color: "#000000",
    margin: 5,
    fontStyle: "italic",
  },
  item: {
    margin: 5,
    padding: 10,
  },
  container001: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  container002: {
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});

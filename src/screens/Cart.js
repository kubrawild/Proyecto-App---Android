import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Alert,
  ImageBackground,
} from "react-native";
import CartItem from "../Components/CartItem";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { usePostOrdersMutation } from "../app/services/shopServices";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";

const Cart = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.value.localId);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [triggerPostOrder, { data, isSuccess, isError, error }] =
    usePostOrdersMutation();

  const handleConfirmPress = () => {
    triggerPostOrder({ localId, order: cart });
  };

  useEffect(() => {
    if (isSuccess) {
      Alert.alert(
        "Compra Exitosa",
        "¡Gracias por tu compra! El producto fue comprado exitosamente.",
        [{ text: "Aceptar" }]
      );
    } else if (isError) {
      Alert.alert(
        "Error",
        "Hubo un problema al procesar la orden. Inténtalo nuevamente."
      );
    }
  }, [isSuccess, isError]);

  return (
    <ImageBackground
      source={require("../../assets/bg/HomeBG.jpg")}
      style={styles.containerIMG}
    >
      <View style={styles.container}>
        {cart.items.length > 0 ? (
          <FlatList
            data={cart.items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                removeItem={() => dispatch(removeItem(item.id))}
              />
            )}
          />
        ) : (
            <Text style={styles.text3}>No hay productos en carrito.</Text>
        )}
        <View style={styles.confirmContainer}>
          {cart.items.length > 0 ? (
            <Pressable onPress={handleConfirmPress}>
              <Text style={styles.text}>CONFIRMAR</Text>
              <Text style={styles.text2}>Total: $ {cart.total} </Text>
            </Pressable>
          ) : (
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Text style={styles.text}>Presione aqui para ir a Productos</Text>
            </Pressable>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    opacity:0.9
  },
  confirmContainer: {
    backgroundColor: "#20b2aa",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    opacity: 0.95,
    width: "80%",
    borderColor: "#2f4f4f",
    borderWidth: 4,
  },
  text: {
    color: "black",
    fontSize: 26,
    justifyContent: "center",
    textAlign:"center",
    
  },
  text2: {
    color: "black",
    fontSize: 15,
    justifyContent: "center",
  },
  text3: {
    color: "black",
    fontSize: 26,
    backgroundColor: "#20b2aa",
    padding: 10,
    margin:10,
    borderRadius: 20,
    opacity: 0.95,
    borderColor: "#2f4f4f",
    borderWidth: 4,
    textAlign:"center"
  },
  containerIMG: {
    flex: 1,
    resizeMode: "contain",
  }, 
});

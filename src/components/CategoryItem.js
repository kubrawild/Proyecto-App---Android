import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { colors } from "../Global/colors";
import CardShadow from "../Wrappers/CardShadow";
import { useDispatch } from "react-redux";
import { setProductsFilteredByCategory } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation, route }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
    onPress={() => {
      dispatch(setProductsFilteredByCategory(category.id));
      navigation.navigate('Category', { categoryName: category.id });
    }}
  >
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{ uri: category.image }}
          resizeMode="stretch"
        >
          {/* Agregué una View con fondo transparente para evitar que el texto sea afectado */}
          <View style={styles.overlay}>
          <Text style={styles.text}>{category.nombre}</Text>
          </View>
        </ImageBackground>

      </View>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 'auto', 
    height: 215,
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    margin: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-end",
    color: "#f0f8ff",
  },
  text: {
    alignItems: "flex-end",
    backgroundColor: `rgba(0, 0, 0, 0.2)`,
    color: "#f0f8ff",
    padding:5,
    fontWeight: "100",
    fontSize: 25,
    borderRadius:5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
});
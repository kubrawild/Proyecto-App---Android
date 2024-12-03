import { FlatList, StyleSheet, ImageBackground } from "react-native";
import CategoryItem from "./CategoryItem";
import { useGetCategoriesQuery } from "../app/services/shopServices";

const Categories = ({ navigation, route }) => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <ImageBackground
      source={require("../../assets/bg/HomeBG.jpg")}
      style={styles.containerIMG}
    >
      <FlatList
        style={styles.container}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} route={route} />
        )}
      />
    </ImageBackground>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerIMG: {
    flex: 1,
    resizeMode: "contain",
  },
});

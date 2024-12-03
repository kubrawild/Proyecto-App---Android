import { FlatList, StyleSheet} from 'react-native'
import allProducts from "../Data/products.json";
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'


const ItemListCategories = ({navigation,route}) => {
  const { categoryName } = route.params;
  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState(allProducts)

  

  useEffect(() => {
    if (categoryName) {
      const productsCategory = allProducts.filter(
        (product) => product.id_categoria === categoryName
      );
      const productsFiltered = productsCategory.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    }
  }, [keyword]);

  return (
    <>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductItem item={item} navigation={navigation} route={route} />}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
 container:{
  width:"100%"
 }
})

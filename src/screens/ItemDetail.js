import { StyleSheet, Text, View , Image, Pressable, Alert } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

const ItemDetail = ({route,navigation}) => {
  const dispatch = useDispatch()
  const product = useSelector((state)=> state.shop.value.productSelected)
  const images = product.images ? product.images : []

  const handleBuyNowPress = () => {
    dispatch(addItem(product));

    // Muestra un mensaje
    Alert.alert(
      'Producto agregado al carrito',
      'Se añadió el producto al carrito correctamente.',
      [
        {
          text: 'Aceptar',
          onPress: () => {
            // Redirecciona a la pantalla anterior
            navigation.goBack();
          },
        },
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri:images[0]}} 
            resizeMode='contain' 
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text> 
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow} onPress={handleBuyNowPress}>
              <Text style={styles.buyNowText}>Añadir Carrito</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        width:"auto",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    content:{
      width:"90%",
      backgroundColor:colors.backPrimary,
      borderRadius:10,
      borderColor:'#c0c0c0',
      borderWidth:1,
      opacity:0.9,
    },
    image:{
      width:"auto",
      height:"60%",
      borderRadius:10,
      backgroundColor:colors.colorFont,
    },
     containerText:{
      paddingHorizontal:5,
      paddingVertical:25,
      alignItems:'center',
     },
     containerPrice:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10
     },
     title:{
      fontSize:30,
      fontWeight:"500",
      marginBottom:15,
      borderBottomWidth:3,
      borderColor:'#2f4f4f',
     },
     description:{
      fontSize:16,
      fontWeight:"200",
      color:'#2f4f4f',
      borderRadius:5,
      borderWidth:1,
      borderColor:'#2f4f4f',
      paddingHorizontal:5,
     },
     price:{
      backgroundColor:'#8b0000',
      borderRadius:5,
      fontSize:29,
      padding:5,
      paddingHorizontal:10,
      color:colors.colorFont,
      borderWidth:1,
      borderColor:'#2f4f4f',
     },
     buyNow:{
      backgroundColor:colors.backSecondary,
      borderRadius:5,
      height:50,
      width:180,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#2f4f4f',
     },
     buyNowText:{
      color:"white",
      fontSize:25,
     }
})
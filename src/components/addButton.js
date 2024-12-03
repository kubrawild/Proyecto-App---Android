import { StyleSheet, Text, View,Pressable } from 'react-native'
import { colors } from '../Global/colors'


const AddButton = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}


export default AddButton


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backPrimary,
        width:"70%",
        paddingVertical:8,
        margin:10,
        borderRadius:10,
        padding:10,
    },
    text:{
        color:"black",
        textAlign:"center",
        fontSize:24
    }
})
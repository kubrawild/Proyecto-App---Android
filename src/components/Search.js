import { StyleSheet, View,Pressable,TextInput,Text} from 'react-native'
import { colors } from '../Global/colors'
import {AntDesign , Entypo} from "@expo/vector-icons"
import { useState } from 'react'


const Search = ({setKeyword}) => {

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    const seach = () =>{
        const expression = /.*[0-9].*/
        if(expression.test(input)){
           setError("no debe contener numeros")
        }else{
            setKeyword(input)
        }
        
    }
    const removeItem = () => {
        setInput("")
        setError("")
    }

  return (
    <View style={styles.container}>
         <View style={styles.containerInput}> 
            <TextInput style={styles.input} placeholder='Buscar producto' value={input} onChangeText={(t)=> setInput(t)}  />
            <Pressable onPress={seach}>
                <AntDesign name='search1' color="black" size={30}/>
            </Pressable>
            <Pressable onPress={removeItem}>
                <Entypo name='circle-with-cross' color="black" size={30}/>
            </Pressable>
        </View>
        {error ? <Text style={styles.errorInput}>{error}</Text> : null}
    </View>
   
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backPrimary,
        width:"100%"
    },
    containerInput:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    input:{
      backgroundColor:colors.colorFont,
      width:"75%",
      borderWidth:1,
      borderRadius:5,
      borderColor:'#d3d3d3',
      paddingHorizontal:10,
      paddingVertical:5,
      margin:8,
    },
    errorInput:{
        color:"red",
        paddingHorizontal:10
    }
})
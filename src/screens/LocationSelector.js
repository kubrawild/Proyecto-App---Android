import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddButton from '../Components/AddButton'
import * as Location from 'expo-location'
import MapPreview from '../Components/MapPreview'
import { googleApi } from '../firebase/googleApi'
import {usePostUserLocationMutation } from '../app/services/shopServices'
import { useSelector } from 'react-redux'
import { date } from 'yup'

const LocationSelector = ({navigation}) => {

    const localId = useSelector(state => state.auth.value.localId)
    const [location,setLocation] = useState({latitude:"",longitude:""})
    const [address,setAddress] = useState("")
    const [errorMsg, setErrorMsg] = useState(null)
    const [triggerPostUserLocation] = usePostUserLocationMutation()


    useEffect(()=>{
        (async ()=>{
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
              }
              let location = await Location.getCurrentPositionAsync({}) 
              setLocation({
                latitude:location.coords.latitude,
                longitude:location.coords.longitude
            })
        })()
    },[])

    useEffect(()=>{
      (async ()=>{
        try {
          if(location.latitude){
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`)

            const data = await response.json()
            console.log(data.results[0].formatted_address)
            setAddress(data.results[0].formatted_address)
          }
      
        } catch (error) {
          setErrorMsg(error.message)
        }
      })() 
    },[location])

    const onConfirmAddress = async () => {
      try {
        const locationFormatted = {
          address,
          ...location
        }
        const data =  await triggerPostUserLocation({localId,locationFormatted})
        console.log(data)
        navigation.goBack()
      } catch (error) {
        setErrorMsg(error.message)
      }

    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Direccion: {address}</Text>
      <Text style={styles.text2}>Longitud: {location.longitude}</Text>
      <Text style={styles.text2}>Latitud: {location.latitude}</Text>
      <MapPreview latitude={location.latitude} longitude={location.longitude}/>
      <AddButton title="Confirmar Localizacion" onPress={onConfirmAddress}/>
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:'#5f9ea0'
    },
    text:{
        fontSize:24,
        backgroundColor:'#f5f5dc',
        padding:8,
        borderRadius:10,
        margin:5,
        fontWeight:'500'
    },
    text2:{
      fontSize:18,
      backgroundColor:'#f5f5dc',
      padding:8,
      borderRadius:10,
      margin:5,
  }
})
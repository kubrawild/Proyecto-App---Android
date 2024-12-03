import { StyleSheet,Image} from 'react-native'
import React from 'react'
import { googleApi } from '../firebase/googleApi'

const MapPreview = ({latitude,longitude}) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
    &zoom=15
    &size=700x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:D%7C${latitude},${longitude}
    &key=${googleApi}`

  return (
    <Image source={require("../../assets/map.jpg")} style={styles.image}/>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300,
        borderRadius:5,
        margin:5, 
     }
})
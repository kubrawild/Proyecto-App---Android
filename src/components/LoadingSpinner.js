import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { colors } from '../Global/colors'

const LoadingSpinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:colors.green1 }}>
      <ActivityIndicator size={80} color="white" />
    </View>
  )
}

export default LoadingSpinner
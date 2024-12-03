import { StyleSheet,StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import { fonts } from './src/Global/fonts'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'
import LocationSelector from './src/Screens/LocationSelector'
import { init } from './src/database'

init()
.then(() => console.log("DB Initialized"))
.catch(err => console.log(err))

const  App = () => {

  const [fontLoaded] = useFonts(fonts)
  if(!fontLoaded) return null
  
  return (
    <>
      <StatusBar backgroundColor={colors.backPrimary}/>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
})

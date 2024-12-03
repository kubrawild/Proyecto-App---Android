import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Orders from '../Screens/Orders'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={ 
            ({route})=>{
                return {
                    header : () => <Header title="Ordenes"/>
                }
            }
        }
    >
        <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  )
}

export default OrdersStack
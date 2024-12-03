import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from "./CartStack"
import { colors } from '../Global/colors'
import OrdersStack from './OrdersStack'
import TabIcon from '../Components/TabIcon'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator()


const TabNavigator = () => {
  return (
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar

          }}
        >
          <Tab.Screen
             name="ShopStack"
             component={ShopStack}
             options={{
              tabBarIcon:({focused}) => <TabIcon icon="shop" label="Productos" focused={focused}/>
             }}
          />
          <Tab.Screen 
              name="CartStack" 
              component={CartStack}
              options={{
                tabBarIcon:({focused}) =>  <TabIcon icon="shopping-cart" label="Carrito" focused={focused}/> 
              }}
             />
             <Tab.Screen 
              name="OrdersStack" 
              component={OrdersStack}
              options={{
                tabBarIcon:({focused}) => <TabIcon icon="list" label="Ordenes" focused={focused}/> 
              }}
             />
            <Tab.Screen 
              name="ProfileStack" 
              component={ProfileStack}
              options={{
                tabBarIcon:({focused}) => <TabIcon icon="user" label="Perfil" focused={focused}/> 
              }}
             />
      </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor:"#2f4f4f",
      position:"relative",
      height:68,
    }
})
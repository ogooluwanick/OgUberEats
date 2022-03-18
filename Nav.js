import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import RestaurantDetail from './screens/RestaurantDetail'
import Home from './screens/Home'
import { Provider } from 'react-redux';
import configureStore from './redux/store'
import OrderCompleted from './screens/OrderCompleted'


const store=configureStore()

export default function Nav() {
  const Stack=createStackNavigator();
  const ScreenOptions={
    headerShown:false,
  }
  return (
  <Provider store={store}>
   <NavigationContainer>
     <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="Home" >
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="RestaurantDetail" component={RestaurantDetail}/>
       <Stack.Screen name="OrderCompleted" component={OrderCompleted}/>
     </Stack.Navigator>
   </NavigationContainer>
  </Provider>
  )
}
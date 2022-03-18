import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"


export default function BottomTabs({navigation,route}) {
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between",margin:10,marginHorizontal:30}} >
      <Icon icon={"home"}   text={"Home"} page={"Home"} navigation={navigation} />
      <Icon icon={"search"}   text={"Browse"} page={""} navigation={navigation}/>
      <Icon icon={"shopping-bag"}   text={"Grocery"} page={"RestaurantDetail"} navigation={navigation}/>
      <Icon icon={"receipt"}   text={"Order"} page={"OrderCompleted"} navigation={navigation}/>
      <Icon icon={"user"}   text={"Acount"} page={""} navigation={navigation}/>
    </View>
  )
}

const Icon =(props)=>(
    <TouchableOpacity  onPress={()=> props.navigation.navigate(props.page)}>
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <FontAwesome5 name={props.icon} size={25} style={{marginBottom:3,alignSelf:"center"}}/>
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)
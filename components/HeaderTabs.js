import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <View style={{flexDirection:'row', alignSelf:"center"}}>
      <HeaderBtn text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Text style={{}}>  </Text>
      <HeaderBtn text="Pickup" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  )
}

const HeaderBtn=(props)=> 
        <TouchableOpacity  style={{backgroundColor:props.activeTab===props.text?"black":"white",paddingVertical:7,paddingHorizontal:18,borderRadius:30}} onPress={()=> props.setActiveTab(props.text)}>
            <Text style={{color:props.activeTab===props.text?"white":"black",fontSize:15,fontWeight:"900",}}>{props.text}</Text>
        </TouchableOpacity>

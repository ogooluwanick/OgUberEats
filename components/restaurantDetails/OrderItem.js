import { View, Text } from 'react-native'
import React from 'react'

export default function OrderItem({item}) {
    const {title,price}=item

  return (
    <View style={{justifyContent:"space-between" , flexDirection:"row",padding:20,borderBottomWidth:1,borderBottomColor:"#999"}}>
      <Text style={{fontWeight:"600",fontSize:16}}>{title}</Text>
      <Text style={{fontSize:16,opacity:.7}}>{price}</Text>
    </View>
  )
}
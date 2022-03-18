import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetails/About'
import MenuItem from '../components/restaurantDetails/MenuItem'
import ViewCart from '../components/restaurantDetails/ViewCart'

export default function RestaurantDetail({route,navigation}) {
  const foods=[
    { 
      title:"fish house ogo house of cards  all day and nigt even on weemends   ",
      desc:["pick up","soft drink"],
      price:"$5",
      image_url: "https://i.imgur.com/2ZZfFQb.jpg"
    },
    {
        title:"meet house ",
      desc:["pick up","soft drink"],
      price:"$44.5",
     image_url: "https://cdn.vox-cdn.com/thumbor/ZwjLhlF0isUg7v8Xm6pHJzYTMeI=/0x0:3071x2289/1200x800/filters:focal(1291x900:1781x1390)/cdn.vox-cdn.com/uploads/chorus_image/image/69269264/shutterstock_1455257777.0.jpg" ,
    },
    {
        title:"cow house ",
      desc:["pick up","soft drink"],
      price:"$12.5",
     image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*" ,
    },
    {
      title:"cow house ",
    desc:["pick up","soft drink"],
    price:"$4",
   image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*" ,
  },
  {
      title:"cow house ",
    desc:["pick up","soft drink"],
    price:"$34",
   image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*" ,
  },
  {
      title:"cow house ",
    desc:["pick up","soft drink"],
    price:"$2",
   image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*" ,
  },
  {
    title:"cow house ",
  desc:["pick up","soft drink"],
  price:"$22",
  image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*" ,
  },
  {
    title:"cow house ",
  desc:["pick up","soft drink"],
  price:"$33",
  image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*" ,
  },
  ]
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical:20}}/>
      <MenuItem restaurantName={route.params.name} foods={foods}/>
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  )
}
import { View, Text,Image } from 'react-native'
import React from 'react'

export default function About(props) {
    const {name,image_url,price,review,rating,categories}= props.route.params
    const formatedcategories=categories.map((cat)=>cat.title).join(" · ")

    const description=  `${formatedcategories}  ${price?" · "+price:""}  · 💳 · ${rating} 🌟 (${review}+)`
  return (
    <View>
      <Resturant image_url={image_url} name={name} description={description}/>
    </View>
  )
}


const Resturant=(props)=>(
    <>
        <Image source={{uri:props.image_url}} style={{width:"100%" ,height:180}}/>
        <Text  style={{fontSize:29,fontWeight:"600",marginTop:10,marginHorizontal:15}}>{props.name}</Text>
        <Text  style={{marginTop:10,fontWeight:"400",marginHorizontal:15,fontSize:15.5}}>{props.description}</Text>
    </>
    

)
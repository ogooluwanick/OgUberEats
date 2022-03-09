import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import  MaterialCommunityIcons from "react-native-vector-icons/Ionicons"

export const LocalRestaurants=[
  { 
    name:"fish house ",
    catergory:["pick up","soft drink"],
    price:"$$",
    review:"333",
    rating:"1.5",
    image_url: "https://i.imgur.com/2ZZfFQb.jpg"
  },
  {
      name:"meet house ",
    catergory:["pick up","soft drink"],
    price:"$$",
    review:"13",
    rating:"3.5",
   image_url: "https://cdn.vox-cdn.com/thumbor/ZwjLhlF0isUg7v8Xm6pHJzYTMeI=/0x0:3071x2289/1200x800/filters:focal(1291x900:1781x1390)/cdn.vox-cdn.com/uploads/chorus_image/image/69269264/shutterstock_1455257777.0.jpg" ,
   text:"Soft Drinks"
  },
  {
      name:"cow house ",
    catergory:["pick up","soft drink"],
    price:"$$",
    review:"3363",
    rating:"3.5",
   image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*" ,
   text:"Bakery items"
  },
  {
      name:"newt house ",
    catergory:["pick up","soft drink"],
    price:"$$",
    review:"44",
    rating:"1",
   image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*" ,
   text:"Fast Foods"
  },
]

export default function RestaurantItems(props) {
    
  return (
      
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
       { props.restaurantData.map((item,index)=>(
            <View  style={{marginTop:10,padding:15,backgroundColor:"white"}} key={index}>
                <RestaurantImg image={item.image_url}/>
                <RestaurantInfo name={item.name} rating={item.rating}/>
            </View>
       ))
       }
    </TouchableOpacity>
  )
}


const RestaurantImg=(props)=>(
    <>
         <Image 
        source={{url:props.image}}
        style={{width:"100%",height:180}
        }/>
        <TouchableOpacity style={{position: "absolute" ,alignSelf:"flex-end",padding:20}} >
            <MaterialCommunityIcons name="heart-outline" size={30} color="white"/>
        </TouchableOpacity>
    </>
)

const RestaurantInfo=(props)=>(
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
       <View>
            <Text style={{fontSize:15, fontWeight:"bold"}}> {props.name} </Text>
            <Text style={{fontSize:13, color:"grey"}}> 30-50 mins </Text>
       </View>
       <View style={{backgroundColor:"#eee",height:35,width:35,alignItems:"center", justifyContent:"center",borderRadius:30, marginRight:10}}>
            <Text> {props.rating} </Text>
       </View>
       
    </View>  
)
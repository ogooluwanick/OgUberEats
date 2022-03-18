import { View, Text,Image,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { useDispatch,useSelector } from 'react-redux'
import BouncyCheckbox from 'react-native-bouncy-checkbox'



export default function MenuItem({restaurantName,foods,hideCheckBox,marginLeft}) {
    

    const dispatch=useDispatch()
    const selectItem=(item,checkboxValue)=>dispatch({
      type:"ADD_TO_CART",
      payload:{...item,restaurantName:restaurantName,checkboxValue:checkboxValue}
    })

    const cartItems= useSelector((state)=>state.cartReducer.selectedItems.items)
    const isFoodInCart= (food,cartItems)=> Boolean(cartItems.find((item)=>item.title===food.title))
    
    

  return (
    <ScrollView showsVerticalScrollIndicator={false} height={"63%"}  >
      {
          foods.map((food,index)=>(
            <View key={index}>
                <View style={styles.menuItemStyle}>
                    {hideCheckBox?(<></>):
                      <BouncyCheckbox  fillColor='green' iconStyle={{borderColor:"lightgrey",borderRadius:0}} onPress={(checkboxValue)=>selectItem(food,checkboxValue)} isChecked={isFoodInCart(food,cartItems)}/>
                    }
                    <FoodProfileInfo foods={food} />
                    <FoodProfileImg  foods={food} marginLeft={marginLeft?marginLeft:0} />
                </View>
                <Divider width={.5} orientation="vertical" style={{marginHorizontal:30}}/>
            </View>
          ))
      }
    </ScrollView>
    
    
  )
}

const FoodProfileInfo=(props)=>(
    <View style={{width:"58%", justifyContent:"space-evenly"}}>
        <Text style={styles.titleStyle}>{props.foods.title}</Text>
        <Text>{props.foods.desc}</Text>
        <Text>{props.foods.price}</Text>
    </View>
)

const FoodProfileImg =({marginLeft,...props})=>(
    <View>
        <Image source={{uri:props.foods.image_url}} style={{width:100, height:100,borderRadius:8,marginLeft:marginLeft}} />
    </View>
)

const styles=StyleSheet.create({
    menuItemStyle:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        margin:20,
    },
    titleStyle:{
        fontSize:19,
        fontWeight:"600"
    }
})
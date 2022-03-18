import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import LottieView from "lottie-react-native"
import { useEffect } from 'react';
import firebase from '../firebase';
import { useState } from 'react';
import MenuItem from '../components/restaurantDetails/MenuItem';
import { ScrollView } from 'react-native-gesture-handler';

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items:[
      { 
        title:"fish house ogo house of cards  all day and nigt even on weemends   ",
        desc:["pick up","soft drink"],
        price:"$5",
        image_url: "https://i.imgur.com/2ZZfFQb.jpg"
      }
    ]
  })
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );  
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db=firebase.firestore()
    const unSubscribe =db.collection("orders")
      .orderBy("createdAt","desc")
      .limit(1)
      .onSnapshot((snapshot)=>{
        snapshot.docs.map((doc)=>{
          setLastOrder(doc.data())
        })
      })

      return()=> unSubscribe();
  }, [])
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white",}}>
      <View style={{margin:15,alignItems:"center",height:"100%"}}>
        <LottieView style={{height:100,alignSelf:"center",marginBottom:30,}} source={require('../assets/animations/check-mark.json')} autoPlay loop={false} speed={.7}/>
        <Text style={{fontWeight:"bold",fontSize:20}}>Your order at {restaurantName} has been placed for {totalUSD}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItem foods={lastOrder.items} hideCheckBox={true}/>
          <LottieView style={{height:200,alignSelf:"center",}} source={require('../assets/animations/cooking.json')} autoPlay loop={true} speed={.5}/>
        </ScrollView>
      </View>
    </SafeAreaView>  )
}
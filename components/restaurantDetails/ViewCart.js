import { View, Text ,Modal,StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity} from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import OrderItem from './OrderItem'
import firebase from "../../firebase";
import LottieView from "lottie-react-native"

export default function ViewCart({navigation}) {
  const [modalVisible, setmodalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
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

  const styles= StyleSheet.create({
    modalContainer:{
      flex:1,
      justifyContent:"flex-end",
      backgroundColor:"rgba(0,0,0,0.7)"
    },
    modalCheckoutContainer:{
      backgroundColor:"white",
      padding:16,
      height:500,
      borderWidth:1,
    },
    modalCheckoutBtn:{
      textAlign:"center",
      fontWeight:"600",
      fontSize:18,
      marginBottom:10
    },
    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  })
  const checkoutModalContent=()=>{
    return(
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item,index)=>(
              <OrderItem key={index} item={item}/>
            ))}
            <View style={styles.subtotalContainer}>
                <Text  style={styles.subtotalText}>total</Text>
                <Text>{totalUSD}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",}}>
              <TouchableOpacity style={{marginTop:40,backgroundColor:"black",alignItems:"center",padding:13,borderRadius:30,width:300,position:"relative"}} onPress={()=> {addOrderToFirebase();         setmodalVisible(false)}}>
                <Text style={{color:"white",fontSize:20}}>CheckOut</Text>
                <Text style={{position:"absolute",color:"white",right:20,fontSize:15,top:17}}>{total?totalUSD:""}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }

  const addOrderToFirebase =()=>{
    setLoading(true)
    const db =firebase.firestore()
    db.collection("orders").add({
      items:items,
      restaurantName:restaurantName,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    }).then(()=>{
      setTimeout(() => {
        setLoading(false)
        setmodalVisible(false)
        navigation.navigate("OrderCompleted")
      }, 2500);
    })
  }
  return (
    <>
    <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={()=>setmodalVisible(false)}>
      {checkoutModalContent()}
    </Modal>
      {
        total?
        (
        <View style={{flex:1, position:"absolute",bottom:30,zIndex:99,alignItems:"center",flexDirection:"row",justifyContent:"center"}}>
          <View style={{flexDirection:"row",justifyContent:"center",width:"100%", }}>
            <TouchableOpacity style={{ marginTop:20,backgroundColor:"black",alignItems:"center",padding:13,borderRadius:30,width:300,flexDirection:'row',position:"relative",justifyContent:"flex-end",padding:15}} onPress={()=> setmodalVisible(true)} >
              <Text style={{color:"white",fontSize:20,marginRight:30}}>{"View Cart"}</Text>
              <Text style={{color:"white",fontSize:20}}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
        )
        :
        (
          <></>
        )
      }
      {loading?
        (<>
          <View style={{backgroundColor:"black",position:"absolute",opacity:.6,justifyContent:"center",alignItems:"center",height:"100%",width:"100%"}}>
            <LottieView style={{height:200}} source={require("../../assets/animations/scanner.json")} autoPlay speed={3} />
          </View>
        </>)
        :
        (<></>)
      }
    </>
  )
}
import { ScrollView,SafeAreaView,View, Text,StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems,{LocalRestaurants} from '../components/home/RestaurantItems'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import LottieView from "lottie-react-native"


export default function Home({route,navigation}) {
    const YELP_API_KEY="w5RqGaY1WXIOPo-VsHDp3pKs3PVYTuw49laZPUpRaQ3W4n6QW5fzGUCj47sca4omBnllj9g58smuM7mKTVNrM-_9X2KqAyLIp6RXJ_yUCeRvrIjpZvkmKmZjYdsnYnYx"
    const [restaurantData, setRestaurantData] = useState(LocalRestaurants)
    const [city, setCity] = useState("San Francisco")
    const [activeTab, setActiveTab] = useState("Delivery")
    const [loading, setLoading] = useState(true)


    const getRestaurantsFromYelp=async ()=>{
        const yelpUrl=`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    
    const apiOptions={
        headers:{
            Authorization: `Bearer ${YELP_API_KEY}`
        }
    }

        const res = await fetch(yelpUrl, apiOptions)
        const json = await res.json()
        return setRestaurantData(json.businesses.filter((business)=> 
            business.transactions.includes(activeTab.toLowerCase())
            )
        )
    }

    setTimeout(() => {
      setLoading(false)
    }, 2500);


    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city,activeTab])
    
  return (
    <SafeAreaView style={{ backgroundColor:"#e1e4e8",flex: 1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+5 : -20}}>
      <View style={{backgroundColor:"white",padding:15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
     </ScrollView>
    <Divider  width={1} color={"black"} />
    <BottomTabs route={route} navigation={navigation}/>
    {
      loading?
      (
        <View style={{backgroundColor:"black",position:"absolute",opacity:.6,justifyContent:"center",alignItems:"center",height:"100%",width:"100%"}}>
          <LottieView style={{height:200}} source={require("../assets/animations/scanner.json")} autoPlay={true} speed={3} />
        </View>
      )
      :
      (<></>)
    }
    </SafeAreaView>
  )
}
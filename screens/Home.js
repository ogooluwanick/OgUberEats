import { ScrollView,SafeAreaView,View, Text,StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems,{LocalRestaurants} from '../components/RestaurantItems'


const YELP_API_KEY="w5RqGaY1WXIOPo-VsHDp3pKs3PVYTuw49laZPUpRaQ3W4n6QW5fzGUCj47sca4omBnllj9g58smuM7mKTVNrM-_9X2KqAyLIp6RXJ_yUCeRvrIjpZvkmKmZjYdsnYnYx"
export default function Home() {
    const [restaurantData, setRestaurantData] = useState(LocalRestaurants)

    const getRestaurantsFromYelp=async ()=>{
        const yelpUrl="https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood"

    
    const apiOptions={
        headers:{
            Authorization: `Bearer ${YELP_API_KEY}`
        }
    }

        const res = await fetch(yelpUrl, apiOptions)
        const json = await res.json()
        return setRestaurantData(json.businesses)
    }

    useEffect(() => {
        getRestaurantsFromYelp()
    }, [])
    
  return (
    <SafeAreaView style={{ backgroundColor:"#e1e4e8",flex: 1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+5 : -20}}>
      <View style={{backgroundColor:"white",padding:15}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData={restaurantData}/>
     </ScrollView>
    </SafeAreaView>
  )
}
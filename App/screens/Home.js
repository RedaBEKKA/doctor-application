import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from "@clerk/clerk-expo";
import Header from '../components/Home/Header';
import SearchBar from '../components/Home/SearchBar';
import Slider from '../components/Home/Slider';
export default function Home() {
    const { isLoaded,signOut } = useAuth();
  return (
    <View style={{padding:20,marginTop:20}}>
      {/* <Button title='se déconnecter' onPress={()=>signOut()}></Button> */}
      <Header />
      <SearchBar setSearchText={(value)=>console.log(value)}/>
      <Slider />
    </View>
  )
}
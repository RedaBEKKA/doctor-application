import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
const SearchBar = ({setSearchText}) => {
    const [searchInput,setSearchInput] = useState(null)
  return (
    <View style={{marginTop:15}} >
      <View style={{display:'flex',
      flexDirection:'row',
      gap:5,
      alignItems:'center',
      borderWidth:0.6,
      borderColor:Colors.GRAY ,
      padding:8,
      borderRadius:8}} >
      <Feather name="search" size={24} color={Colors.primary} />
        <TextInput 
        placeholder='Chercher' 
        onChangeText={(value)=>setSearchInput(value)}
        onSubmitEditing={()=>setSearchText(searchInput)} 
        style={{ width:'100%'}}
        />
      </View>
    </View>
  )
}

export default SearchBar
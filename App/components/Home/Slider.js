import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Slider() {
    const sliderList = [
        {
            id:1,
            name:'Slider 1',
            imageUrl:'https://img.freepik.com/photos-gratuite/belle-jeune-femme-medecin-regardant-camera-dans-bureau_1301-7807.jpg?w=826&t=st=1700563876~exp=1700564476~hmac=4838c8ce31b694bb86f5b7cf317e3a64710412b3533a3e50296a3b1e80556167'
        },
        {
            id:2,
            name:'Slider 2',
            imageUrl:'https://img.freepik.com/photos-gratuite/j-essaye-etre-meilleur-docteur_329181-2188.jpg?w=900&t=st=1700563911~exp=1700564511~hmac=e18324017e4957bfa4857ccdf022efb0b264885bac6defa18c3f8603b4b42358'
        },
    ]
  return (
    <View style={{marginTop:10}} >
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <Image source={{uri:item.imageUrl}} style={{width:Dimensions.get('screen').width,height:170,borderRadius:10,margin:2}} />
        )}
      />
    </View>
  )
}
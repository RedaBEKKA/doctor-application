import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Appointement from '../screens/Appointement'
import Profile from '../screens/Profile'
import { Entypo } from '@expo/vector-icons';  
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

export default function Tabnavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    } }>
      <Tab.Screen  name='Home' component={Home} options={{
        tabBarIcon : ({color,size})=>(
          <Entypo name="home" size={size} color={color} />
        )
      }} />
      <Tab.Screen name='appointement' component={Appointement} options={{
        tabBarIcon : ({color,size})=>(
          <Entypo name="calendar" size={size} color={color} />
        )
      }} />
      <Tab.Screen name='profile' component={Profile} options={{
        tabBarIcon : ({color,size})=>(
          <Ionicons name="man" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import app from "../../assets/images/home.png"
import React from 'react'
import Colors from '../../assets/Shared/Colors';
import SignInWithOAuth from '../components/SignInWithOAuth';

export default function Login() {
    return (
        <View style={{alignItems:'center '}}>
            <Image source={app} style={styles.appImage}/>
            <View style={{backgroundColor:Colors.white,padding:25,alignItems:'center',marginTop:-50 ,elevation:2}}>
                <Text style={styles.heading}>Ton medecin principal</Text>
                <Text style={styles.heading}>Application de prise de rendez-vous </Text>
                <Text style={{textAlign:'center',marginTop:20}} >Reservez votre rendez-vous en toute simplicitée </Text>
               <SignInWithOAuth/> 
            </View>
        </View>
      );
}


const styles = StyleSheet.create({
    appImage:{
        width:380,
        height:400,
        objectFit:'contain',
        marginTop:50,
        borderRadius:20,
        borderWidth:6,
        borderColor:"#000"
    },
    heading:{
        fontSize:28,
        fontWeight:'bold',
    }
})
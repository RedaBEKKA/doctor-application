

import Login from './App/screens/Login';
import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import SignInWithOAuth from "./App/components/SignInWithOAuth";
import { ClerkProvider ,SignedIn,SignedOut} from "@clerk/clerk-expo";
import Home from './App/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Tabnavigation from './App/Navigation/Tabnavigation';
import {useFonts} from "expo-font"
export default function App() {
  const [fontsLoaded] = useFonts({
    'appFont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appFont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appFont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  if(!fontsLoaded){
    return null
  }
  return (
    <ClerkProvider publishableKey={"pk_test_Y2FzdWFsLW11bGxldC01LmNsZXJrLmFjY291bnRzLmRldiQ"}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
      <SignedIn>
          <NavigationContainer>
            <Tabnavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <Login/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});

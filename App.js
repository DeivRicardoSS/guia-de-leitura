import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from 'react';
import { Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
const { useEffect } = React;

import StackNavigator from './src/navigation/StackNavigator';

export default function App() {

  const loadFonts = async() => {
    await Font.loadAsync({
        'bold': require('./assets/fonts/ReadexPro-Bold.ttf'),
        'extra-light': require('./assets/fonts/ReadexPro-ExtraLight.ttf'),
        'pro-light': require('./assets/fonts/ReadexPro-Light.ttf'),
        'medium': require('./assets/fonts/ReadexPro-Medium.ttf'),
        'regular': require('./assets/fonts/ReadexPro-Regular.ttf'),
        'semi-bold': require('./assets/fonts/ReadexPro-SemiBold.ttf')
    });
  }

  React.useEffect(()=> {
    loadFonts();
  }, []);

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#F5F5F5');  // Cor de fundo (exemplo com roxo)
    
    NavigationBar.setButtonStyleAsync('dark'); // Pode ser 'dark' ou 'light'
  }, []);

  return (
    
    <NavigationContainer style={{ fontFamily: 'regular'}}>
      <StackNavigator/>
    </NavigationContainer>
  );
}
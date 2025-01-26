import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from 'react';
import { Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
const { useEffect } = React;

import StackNavigator from './src/navigation/StackNavigator';

export default function App() {

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
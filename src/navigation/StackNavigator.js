import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen"
import SignupScreen from "../screens/SignupScreen"
import Signup2Screen from "../screens/Signup2Screen"
import Signup3Screen from "../screens/Signup3Screen"
import LivroScreen from "../screens/LivroScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        
        <Stack.Navigator initialRouteName="Welcome">
            
            <Stack.Screen name= "Login" component={LoginScreen} options={{headerShown: true}}/>
            <Stack.Screen name= "Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name= "Home" component={BottomTabs} options={{headerShown: false}}/>
            <Stack.Screen name= "Cadastro 1" component={SignupScreen} options={{headerShown: true}}/>
            <Stack.Screen name= "Cadastro 2" component={Signup2Screen} options={{headerShown: true}}/>
            <Stack.Screen name= "Cadastro 3" component={Signup3Screen} options={{headerShown: true}}/>
            <Stack.Screen name= "Livro" component={LivroScreen} options={{headerShown: true}}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;
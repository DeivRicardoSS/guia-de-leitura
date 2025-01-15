import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen"

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        
        <Stack.Navigator initialRouteName="Welcome">
            
            <Stack.Screen name= "Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name= "Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name= "Home" component={BottomTabs} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;
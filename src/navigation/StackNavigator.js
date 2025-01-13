import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name= "Login" component={LoginScreen} options={{headerShown: false}}/>

            <Stack.Screen name= "Home" component={BottomTabs} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;
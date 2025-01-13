import { View, Text, SafeAreaView, TextInput, Button } from "react-native";
import { loginUser } from "../api/api";
import React, {useState} from "react";
import loginStyles from "../styles/loginStyles";
import Input1 from "../components/Input1";

function LoginScreen({ navigation }){
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const user = await loginUser(email);
            if(user){
                navigation.navigate('Home', {user});
            } else {
                setError('Somenthing went wrong');
            }
        } catch (error) {
            setError(err)
        }
    }

    return (
        <SafeAreaView style={loginStyles.container}>
            
        </SafeAreaView>

    );
}

export default LoginScreen;
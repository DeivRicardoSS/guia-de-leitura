import { View, Text, SafeAreaView, TextInput, Button, StyleSheet } from "react-native";
import { loginUser } from "../api/api";
import React, {useState} from "react";
import Input1 from "../components/Input1";
import Button1 from "../components/Button1";

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
        <SafeAreaView style={styles.container}>
            <Input1
                placeholder={"Email"}
            />
            <Input1
                placeholder={"Senha"}
            />
            <Button1
                value={"Iniciar Sessão"}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        gap: 15,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        flex: 1
    }
});

export default LoginScreen;
import { View, Text, SafeAreaView, TextInput, Button, StyleSheet } from "react-native";
import { loginUser } from "../api/api";
import React, {useState} from "react";
import Input1 from "../components/Input1";
import Button1 from "../components/Button1";
import { addUser } from "../localdata/User";

function LoginScreen({ navigation }){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const user = await loginUser({email, senha});
            if(user){
                addUser(user);
                navigation.navigate('Home');
            } else {
                setError('Usuário não encontrado');
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Input1
                placeholder={"Email"}
                onChange={setEmail}
            />
            <Input1
                placeholder={"Senha"}
                onChange={setSenha}
            />
            <Text>{error}</Text>
            <Button1
                value={"Iniciar Sessão"}
                onPress={handleLogin}
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
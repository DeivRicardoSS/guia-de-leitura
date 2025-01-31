import { View, Text, SafeAreaView, TextInput, Button, StyleSheet } from "react-native";
import { loginUser } from "../api/api";
import React, {useState} from "react";
import Input1 from "../components/Input1";
import Button1 from "../components/Button1";
import { useUser, useUpdateUser } from "../localdata/User";

function LoginScreen({ navigation }){
    const { user } = useUser();
    const { updateUser } = useUpdateUser();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!email || !senha){
            setError('Preencha todos os dados');
            return;
        }
        try {
            console.log('fazendo requisição')
            const response = await loginUser({email, senha});
            console.log('requisição sucedida')
            if(response){
                console.log('salvando dados do usuario')
                updateUser(response);
                navigation.navigate("Home");
            } else {
                setError(response.error);
                alert(response.error);
            }
        } catch (error) {
            console.log(error);
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
                secureTextEntry={true}
            />
            <Text style={{color: 'red'}}>{error}</Text>
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
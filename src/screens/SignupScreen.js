import { View, Text, SafeAreaView, TextInput, Button, StyleSheet } from "react-native";
import { loginUser } from "../api/api";
import React, {useState} from "react";
import Input1 from "../components/Input1";
import Button2 from "../components/Button2";
import Root from "../styles/root";

function SignupScreen({ navigation }){
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
            <View>
                <Text style={styles.title}>Informações Básicas</Text>
                <Text style={styles.subtitle}>Queremos te conhecer melhor!</Text>
            </View>
            <Input1
                placeholder={"Nome Completo"}
            />
            <Input1
                placeholder={"Sexo"}
            />
            <Input1
                placeholder={"Data de Nascimento"}
            />
            <Button2
                value={"Próxima Etapa"}
                onPress={() => navigation.navigate('Cadastro 2')}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Root.title
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '400',
        color: Root.text
    }
});

export default SignupScreen;
import { View, Text, SafeAreaView, TextInput, Button, StyleSheet } from "react-native";
import { loginUser } from "../api/api";
import React, {useState} from "react";
import Input1 from "../components/Input1";
import InputDate from "../components/InputDate";
import Button2 from "../components/Button2";
import Root from "../styles/root";
import { addCadastro } from "../localdata/Cadastro";

function SignupScreen({ navigation }){
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [nascimento, setNascimento] = useState('');
    


    const handleLogin = async () => {
        if (!nome || !sexo || !nascimento) return;
        addCadastro({
            nome: nome,
            sexo: sexo,
            nascimento: nascimento
        });
        navigation.navigate('Cadastro 2');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Informações Básicas</Text>
                <Text style={styles.subtitle}>Queremos te conhecer melhor!</Text>
            </View>
            <Input1
                placeholder={"Nome Completo"}
                onChange={setNome}
            />
            <Input1
                placeholder={"Sexo"}
                onChange={setSexo}
            />
            <InputDate
                placeholder={"Data de Nascimento"}
                value={nascimento}
                onChange={setNascimento}
            />
            <Button2
                value={"Próxima Etapa"}
                onPress={handleLogin}
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
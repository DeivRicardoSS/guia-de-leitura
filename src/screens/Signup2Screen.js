import { View, Text, SafeAreaView, TextInput, Button, StyleSheet } from "react-native";
import { loginUser } from "../api/api";
import React, {useState} from "react";
import Input1 from "../components/Input1";
import Button2 from "../components/Button2";
import Root from "../styles/root";
import { cadastro, addCadastro } from "../localdata/Cadastro";

function Signup2Screen({ navigation }){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSemha, setConfSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!email || !senha || !confSemha){
            setError('Preencha todos os dados');
            return;
        } 

        if (senha !== confSemha){
            setError('As senhas devem ser iguais');
            return;
        }


        addCadastro({email: email, senha: senha});
        navigation.navigate('Cadastro 3');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Informações de Acesso</Text>
                <Text style={styles.subtitle}>Defina suas credenciais {cadastro.nome}.</Text>
            </View>
            <Input1
                placeholder={"Email"}
                onChange={setEmail}
            />
            <Input1
                placeholder={"Senha"}
                onChange={setSenha}
                secureTextEntry={true}
            />
            <Input1
                placeholder={"Confirme sua Senha"}
                onChange={setConfSenha}
                secureTextEntry={true}
            />
            <Text style={{color: 'red'}}>{error}</Text>
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

export default Signup2Screen;
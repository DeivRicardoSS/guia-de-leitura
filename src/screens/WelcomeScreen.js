import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, StyleSheet, Text } from "react-native";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import Root from "../styles/root";
import { AsyncStorage } from "react-native";
import { confirmUser } from "../api/api";
import { useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
import { useUser, useUpdateUser } from "../localdata/User";

function WelcomeScreen({navigation}) {
    const { user } = useUser();
    const { updateUser } = useUpdateUser();
    useEffect(() => {
        const checkUserLogin = async () => {
            try {
                // Obtém o usuário armazenado de forma assíncrona
                const usuario = await SecureStore.getItemAsync('user');
                
                if (usuario) {
                    // Converte para objeto JavaScript, já que SecureStore armazena como string
                    const usuarioObj = JSON.parse(usuario); 
                    const response = await confirmUser({ userId: usuarioObj.userId });

                    console.log("response", response);

                    // Verifica se o login foi bem-sucedido e navega para a tela 'Home'
                    if (response.userId == usuarioObj.userId) {
                        await updateUser(response)
                        console.log('response', response.userId);
                        console.log('local', user.userId)

                        navigation.navigate("Home");
                    }
                }
            } catch (error) {
                console.log("Erro ao verificar o login:", error);
            }
        };

        checkUserLogin();
    }, [navigation]);
    

    return (
        <View style={{flex: 1}}>
            <Image
                source={require('../../assets/capa.jpg')}
                style = {styles.img}
            />
            <View style={styles.container}>
                <Text style={styles.title}>Bem Vindo ao Shlomo</Text>
                <Text style={styles.subtitle}>O melhor lugar para manter e organizar uma rotina de leitura.</Text>
                <Button2 
                    value={'Realizar Cadastro'}
                    onPress={() => navigation.navigate('Cadastro 1')}
                />
                <Button1 
                    value={'Iniciar Sessão'}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        objectFit: 'cover',
        width: '100%',
        height: 700
    },
    container: {
        width: '100%',
        gap: 20,
        padding: 20,
        height: 300,
        alignItems: 'center',
        backgroundColor: Root.fundo,
        position: 'absolute',
        bottom: 0,
        borderStartStartRadius: 10,
        borderEndStartRadius: 10
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

export default WelcomeScreen;
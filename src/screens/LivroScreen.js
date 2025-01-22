import { View, Text, SafeAreaView, TextInput, Button, StyleSheet, Image } from "react-native";
import { loginUser } from "../api/api";
import React, {useState} from "react";
import Input1 from "../components/Input1";
import Button1 from "../components/Button1";
import Root from "../styles/root";

function LivroScreen({ navigation }){

    return (
        <View style={styles.container}>
            <Image/>
            <Text>Título do Livro</Text>
            <Text>Autor do Livro</Text>
            <Text>XXXX Páginas</Text>
            <View>
                <Text>XX% Completo</Text>
                <View>
                    <View></View>
                </View>
            </View>
            <Button1
                value={"Continuar Leitura"}
            />
        </View>

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

export default LivroScreen;
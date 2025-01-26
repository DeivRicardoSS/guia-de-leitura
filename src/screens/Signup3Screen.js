import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, {useState} from "react";

import Button1 from "../components/Button1";
import Root from "../styles/root";
import { cadastro, addCadastro } from "../localdata/Cadastro";
import { addUser } from "../localdata/User";
import { signup } from '../api/api';

function Signup3Screen({ navigation }){
    const [selectedOption, setSelectedOption] = useState(null);

  // Função para alternar a seleção
    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    async function handleLogin() {
        if (selectedOption) {
            addCadastro({avatar: selectedOption});
            const response = await signup(cadastro);
            addUser({
                nome: cadastro.nome,
                nascimento: cadastro.nascimento,
                sexo: cadastro.sexo,
                email: cadastro.email,
                senha: cadastro.senha,
                avatar: cadastro.avatar,
                userId: response.data
            });
            navigation.navigate('Home');
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Escolha um Avatar</Text>
                <Text style={styles.subtitle}>Selecione o vatar que mais lhe agrade</Text>
            </View>
            <View style={styles.avatares}>
                <TouchableOpacity onPress={() => handleSelect('Avatar-1')}>
                    <Image
                    source={selectedOption === 'Avatar-1' ? require('../../assets/avatars/Avatar-1.png') : require('../../assets/avatars/Avatar-1_.png')}
                    style={styles.img}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('Avatar-2')}>
                    <Image
                    source={selectedOption === 'Avatar-2' ? require('../../assets/avatars/Avatar-2.png') : require('../../assets/avatars/Avatar-2_.png')}
                    style={styles.img}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('Avatar-3')}>
                    <Image
                    source={selectedOption === 'Avatar-3' ? require('../../assets/avatars/Avatar-3.png') : require('../../assets/avatars/Avatar-3_.png')}
                    style={styles.img}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('Avatar-4')}>
                    <Image
                    source={selectedOption === 'Avatar-4' ? require('../../assets/avatars/Avatar-4.png') : require('../../assets/avatars/Avatar-4_.png')}
                    style={styles.img}
                    />
                </TouchableOpacity>
            </View>
            <Button1
                value={'Continuar'}
                onPress={handleLogin}
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
    },
    avatares: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center'
    },
    img: {
        objectFit: 'cover',
        width: 150,
        height: 150,
        borderRadius: 100
    }
});

export default Signup3Screen;
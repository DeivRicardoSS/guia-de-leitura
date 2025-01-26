import { StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import Input1 from '../components/Input1';
import Button1 from '../components/Button1';
import { novoLivro } from '../api/api';
import { user } from '../localdata/User';
import * as ImagePicker from 'expo-image-picker';

function NovoLivroScreen() {
    const [photo, setPhoto] = useState(null);
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [paginas, setPaginas] = useState('');
    const [paginasLidas, setPaginasLidas] = useState('');

    const handlePickImage = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            alert("Precisamos da permissão para acessar a câmera!");
            return;
        }

        try {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [3, 4],
                quality: 1,
            });

            if (!result.canceled) {
                setPhoto(result.assets[0].uri);
            }
        } catch (error) {
            console.error("Erro ao abrir a câmera: ", error);
            alert("Houve um erro ao tentar tirar a foto.");
        }
    };

    const validateInputs = () => {
        if (!photo || !nome || !autor || !genero || !paginas || !paginasLidas) {
            alert('Por favor, preencha todos os campos.' + `nome: ${nome}, autor: ${autor}, genero: ${genero}, paginas: ${paginas}, paginasLidas: ${paginasLidas}, photo: ${photo}`);
            return false;
        }
        if (isNaN(paginas) || isNaN(paginasLidas)) {
            alert('Quantidade de páginas e páginas lidas devem ser números.');
            return false;
        }
        if (parseInt(paginasLidas) > parseInt(paginas)) {
            alert('Páginas lidas não podem ser maiores que o total de páginas.');
            return false;
        }
        return true;
    };

    const enviarLivro = async () => {
        if (!validateInputs()) return;

        try {
            await novoLivro({
                nome,
                autor,
                genero,
                paginas: parseInt(paginas),
                paginasLidas: parseInt(paginasLidas),
                file: photo,
                userId: user.userId
            });
            Alert.alert('Sucesso', 'Livro adicionado com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar livro:', error);
            Alert.alert('Erro', 'Não foi possível adicionar o livro. Tente novamente.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Preview da Imagem */}
            <View style={styles.previewContainer}>
                {photo ? (
                    <Image source={{ uri: photo }} style={styles.image} />
                ) : (
                    <Text style={styles.placeholderText}>Nenhuma foto capturada</Text>
                )}
            </View>

            <Button1 value="Tirar Foto" onPress={handlePickImage} />

            {/* Inputs */}
            <View style={styles.inputsContainer}>
                <Input1 placeholder="Título" onChange={setNome} />
                <Input1 placeholder="Autor" onChange={setAutor} />
                <Input1 placeholder="Gênero" onChange={setGenero} />
            </View>

            {/* Inputs de Páginas */}
            <Text style={styles.sectionTitle}>Páginas</Text>
            <View style={styles.pagesContainer}>
                <Input1
                    style={styles.input}
                    placeholder="Quantidade de Páginas"
                    keyboardType="numeric"
                    onChange={setPaginas}
        
                />
                <Input1
                    style={styles.input}
                    placeholder="Páginas Lidas"
                    keyboardType="numeric"
                    onChange={setPaginasLidas}
                />
            </View>

            {/* Botão de Enviar */}
            <Button1 value="Adicionar Livro" onPress={enviarLivro} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        gap: 10,
    },
    previewContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    placeholderText: {
        fontSize: 16,
        color: '#888',
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    inputsContainer: {
        marginVertical: 10,
        gap: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    pagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    input: {
        flex: 1,
    },
});

export default NovoLivroScreen;

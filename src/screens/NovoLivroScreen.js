import { StyleSheet, Text, View, Image, Alert, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { useState } from 'react';
import Input1 from '../components/Input1';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
import { novoLivro } from '../api/api';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import Root from '../styles/root';
import { confirmUser, ip } from '../api/api';
import { useUser, useUpdateUser } from '../localdata/User';

function NovoLivroScreen({ navigation }) {
    const { user } = useUser();
    const { updateUser } = useUpdateUser();

    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [photo, setPhoto] = useState(null);
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [paginas, setPaginas] = useState('');
    const [paginasLidas, setPaginasLidas] = useState('');

    const handlePickImageWeb = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setPhoto(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    };

    const handlePickImage = async () => {
        if (Platform.OS === 'web') {
            handlePickImageWeb();
            return;
        }

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
            alert('Por favor, preencha todos os campos.');
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
        setLoading(true);
        setShowModal(true);

        if (!validateInputs()) {
            setLoading(false);
            setShowModal(false);
            return;
        }

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('autor', autor);
        formData.append('genero', genero);
        formData.append('quantPaginas', paginas);
        formData.append('pagAtual', paginasLidas);

        if (Platform.OS === 'web') {
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput && fileInput.files[0]) {
                formData.append('file', fileInput.files[0]);
            }
        } else {
            formData.append('file', {
                uri: photo,
                name: 'photo.jpg',
                type: 'image/jpeg',
            });
        }

        formData.append('userId', user.userId);

        try {
            const response = await axios.post(`http://${ip}:3000/livro/novo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Alert.alert('Livro cadastrado com sucesso!');
            setPhoto(null);
            setNome('');
            setAutor('');
            setGenero('');
            setPaginas('');
            setPaginasLidas('');

            updateUser(response.data);
            console.log('response', response.data);
            console.log('user', user.livros);

            navigation.navigate('Livros');
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error);
            alert('Erro ao cadastrar livro: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
            setShowModal(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.previewContainer}>
                {photo ? (
                    <Image source={{ uri: photo }} style={styles.image} />
                ) : (
                    <Text style={styles.placeholderText}>Nenhuma foto capturada</Text>
                )}
            </View>

            <Button2 
                value="Tirar Foto" 
                onPress={handlePickImage} 
                style={{ marginBottom: 20 }}
            />

            <View style={styles.inputsContainer}>
                <Input1 placeholder="Título" onChange={setNome} />
                <Input1 placeholder="Autor" onChange={setAutor} />
                <Input1 placeholder="Gênero" onChange={setGenero} />
            </View>

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

            <Button1 
                value="Adicionar Livro" 
                onPress={enviarLivro} 
                style={{ marginTop: 20 }}
            />

            {loading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={Root.primaria} />
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        gap: 20,
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
        objectFit: 'cover',
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
        fontSize: 12,
    },
    loadingContainer: {
        position: 'absolute',
        width: '150%',
        height: '150%',
        top: '50%',
        left: '50%',
        transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
        borderColor: Root.primaria,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default NovoLivroScreen;
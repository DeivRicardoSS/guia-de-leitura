import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input1 from '../components/Input1';
import Button1 from '../components/Button1';
import Root from '../styles/root';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

function NovoLivroScreen() {
    const [photo, setPhoto] = useState(null);

    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [paginas, setPaginas] = useState('');
    const [paginasLidas, setPaginasLidas] = useState('');

    const handlePickImage = async () => {
        // Solicitar permissão para usar a câmera
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
        if (status !== "granted") {
          alert("Precisamos da permissão para acessar a câmera!");
          return;
        }
    
        try {
          // Lançar a câmera e capturar a imagem
          const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
          });
    
          // Verificar se o usuário não cancelou a captura da foto
          if (!result.canceled) {
            setPhoto(result.assets[0].uri); // Armazenar o URI da imagem
          }
        } catch (error) {
          console.error("Erro ao abrir a câmera: ", error);
          alert("Houve um erro ao tentar tirar a foto.");
        }
      };

    const handleSubmit = () => {
        if (!photo || !nome || !autor || !genero || !paginas || !paginasLidas) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Livro adicionado com sucesso!');
        console.log('Livro adicionado com sucesso!');
    }

    return (
        <View style={styles.container}>
            <View style={styles.previewContainer}>
                {photo && (
                    <Image source={{ uri: photo }} style={styles.image} />
                )}
            </View>
            
            

            {/* Botão para tirar foto */}
            <Button1 value="Tirar Foto" onPress={handlePickImage} />

            <View style={styles.sec1}>
                <Input1
                    placeholder="Título"
                    onChangeText={setNome} // Corrigido para onChangeText
                />
                <Input1
                    placeholder="Autor"
                    onChangeText={setAutor}
                />
                <Input1
                    placeholder="Gênero"
                    onChangeText={setGenero}
                />
            </View>
            <View>
                <Text>Páginas</Text>
            </View>
            <View style={styles.sec2}>
                <Input1
                    style={styles.input}
                    placeholder="Quantidade de Páginas"
                    keyboardType="numeric"
                    onChangeText={setPaginas}
                />
                <Input1
                    style={styles.input}
                    placeholder="Páginas Lidas"
                    keyboardType="numeric"
                    onChangeText={setPaginasLidas}
                />
            </View>
            <Button1
                value="Adicionar Livro"
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        gap: 10
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    previewContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    preview: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    sec1: {
        marginVertical: 10,
        gap: 10
    },
    sec2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    input: {
        flex: 1,
        fontSize: 12
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    }
});

export default NovoLivroScreen;

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Livro from '../components/Livro';
import { user } from '../localdata/User';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ip } from '../api/api';
import { setLivroAberto } from '../localdata/LivroAberto';


function LivrosScreen({navigation}) {
    let [livros, setLivros] = useState([])

    useFocusEffect(
        useCallback(()=>{
            setLivros(user.livros);
        }, [])
    );


    return (
        <ScrollView contentContainerStyle={styles.container}>

            {
                livros.map((livro, index) => (
                    <Livro
                        key={index}
                        img={`http://192.168.0.106:3000/${livro.link}`}
                        titulo={livro.nome}
                        autor={livro.autor}
                        progresso={parseInt((livro.pagAtual / livro.quantPaginas) * 100 )}
                        onPress={()=>{
                            setLivroAberto(index);
                            navigation.navigate('Livro');
                        }}
                    />
                ))
            }

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
});

export default LivrosScreen
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Livro from '../components/Livro';
import { user } from '../localdata/User';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';



function LivrosScreen() {
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
                        img={`http://10.81.0.5:3000/${livro.link}`}
                        titulo={livro.nome}
                        autor={livro.autor}
                        progresso={parseInt((livro.pagAtual / livro.quantPaginas) * 100 )}
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
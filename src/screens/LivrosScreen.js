import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Livro from '../components/Livro';
import { user } from '../localdata/User';

function LivrosScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <Livro 
                img={"https://i.imgflip.com/6d6erq.jpg"}
                titulo={"Sigma"}
                autor={"SigmaBoy"}
                progresso={20}
            />

            <Livro 
                img={"https://i.imgflip.com/6d6erq.jpg"}
                titulo={"Sigma"}
                autor={"SigmaBoy"}
                progresso={20}
            /> */}

            {
                user.livros.map((livro, index) => (
                    <Livro
                        img={`http://192.168.0.102:3000/${livro.link}`}
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
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input1 from '../components/Input1';
import Button1 from '../components/Button1';
import Root from '../styles/root';
function NovoLivroScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.sec1}>
                <Image style={styles.img}/>
                <Input1
                    placeholder="Título"
                />
                <Input1
                    placeholder="Autor"
                />
                <Input1
                    placeholder="Gênero"
                />
            </View>
            <View>
                <Text>Páginas</Text>
            </View>
            <View style={styles.sec2}>
                <Input1
                    style={styles.input}
                    placeholder="Quantidade de Páginas"
                />
                <Input1
                    style={styles.input}
                    placeholder="Páginas Lidas"
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
        flexDirection: 'column',
        padding: 20,
        gap: 10
    },
    sec1: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
    },
    sec2: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between'
    },
    input: {
        width: '48%',
        fontSize: 12
    },
    img: {
        width: 115,
        height: 158,
        backgroundColor: Root.fundo2
    }
});

export default NovoLivroScreen
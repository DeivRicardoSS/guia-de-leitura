import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input2 from '../components/Input2';
function NovoLivroScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Adicionar Livro</Text>
            </View>
            <View style={styles.sec1}>
                <Image style={styles.img}/>
                <View style={styles.inputs}>
                    <Input2
                        placeholder="Título"
                    />
                    <Input2
                        placeholder="Autor"
                    />
                    <Input2
                        placeholder="Gênero"
                    />
                </View>
            </View>
            <View>
                <Text>Páginas</Text>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 20,
        gap: 5
    },
    sec1: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputs: {
        width: '48%',
        gap: 15
    },
    img: {
        width: '48%',
        height: 250,
        backgroundColor: 'gray'
    }
});

export default NovoLivroScreen
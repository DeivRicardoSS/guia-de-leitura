import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Livro from '../components/Livro';

function LivrosScreen() {
    return (
        <View style={styles.container}>
            <Livro 
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
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 20
    }
});

export default LivrosScreen
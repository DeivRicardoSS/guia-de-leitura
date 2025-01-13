import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Estatisticas from '../components/Estatisticas';
import CardAmigos from '../components/CardAmigos';

function ContaScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userArea}>
                <Image source={{uri: 'https://avatars.githubusercontent.com/u/131066052?v=4'}}
                style={styles.img}
                />
                <View >
                    <Text style={styles.userName}>Deivyson Ricardo</Text>
                    <Text>D31vy5</Text>
                </View>
            </View>

            <View style={styles.sectionTitles}>
                <Text style={styles.title}>Estatísticas</Text>
            </View>
            
            <Estatisticas/>
            
            <View style={styles.sectionTitles}>
                <Text style={styles.title}>Amigos</Text>
                <Text style={[styles.title, styles.link]}>Adicionar Amigos</Text>
            </View>
            <CardAmigos/>
            
            
            
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 20,
        gap: 5
    },
    userArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingBottom: 20,
        borderBottomColor: '#FF6F61',
        borderBottomWidth: 2,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    userName: {
        fontSize: 18,
        fontWeight: 800
    },
    sectionTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 700,
        color: '#333333'
    },
    link: {
        textTransform: 'uppercase',
        color: '#6C63FF'
    },
});
export default ContaScreen;
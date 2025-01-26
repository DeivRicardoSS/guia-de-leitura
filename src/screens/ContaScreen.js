import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Estatisticas from '../components/Estatisticas';
import CardAmigos from '../components/CardAmigos';
import { user } from '../localdata/User';

function ContaScreen() {
    const avatarMap = {
        'Avatar-1': require('../../assets/avatars/Avatar-1.png'),
        'Avatar-2': require('../../assets/avatars/Avatar-2.png'),
        'Avatar-3': require('../../assets/avatars/Avatar-3.png'),
        'Avatar-4': require('../../assets/avatars/Avatar-4.png'),
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.userArea}>
                <Image source={avatarMap[user.avatar]}
                style={styles.img}
                />
                <View >
                    <Text style={styles.userName}>{user.nome}</Text>
                    <Text>{user.email}</Text>
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
            
            
            
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 20,
        gap: 5,
        paddingBottom: 20
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
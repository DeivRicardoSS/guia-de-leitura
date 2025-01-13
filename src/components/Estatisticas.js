import { StyleSheet, Text, View } from 'react-native';

import LivroIcon from '../svg/Livro.svg';
import XPIcon from '../svg/XP.svg';
import MedalhaIcon from '../svg/Medalha.svg';
import TrofeuIcon from '../svg/Trofeu.svg';


function Estatisticas() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <LivroIcon/>
                <View>
                    <Text style={styles.bold}>10</Text>
                    <Text style={styles.text}>Dias de Lidas</Text>
                </View>
            </View>
            <View style={styles.card}> 
                <XPIcon/>
                <View>
                    <Text style={styles.bold}>100</Text>
                    <Text style={styles.text}>Total de XP</Text>
                </View>
            </View>

            <View style={styles.card}>
                <TrofeuIcon/>
                <View>
                    <Text style={styles.bold}>Ouro</Text>
                    <Text style={styles.text}>Divisão</Text>
                </View>
            </View>

            <View style={styles.card}>
                <MedalhaIcon/>
                <View>
                    <Text style={styles.bold}>10</Text>
                    <Text style={styles.text}>Pódios</Text>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        justifyContent: 'space-between',
        
    },

    card: {
        width: '49.2%',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        gap: 10,
        borderColor: '#FF6F61'
        
    },
    bold: {
        fontWeight: '700',
        color: '#000',
    },
    text: {
        color: '#000'
    }
});

export default Estatisticas;
import { StyleSheet, Text, View } from 'react-native';
import SetaIcon from '../svg/seta.svg';
import Amigo from './Amigo';

function CardAmigos() {
    const size = 20;
    return (
        <View style={styles.container}>
            <View style={styles.linhaum}>
                <View style={styles.linhaumComponents}>
                    <Text style={styles.bold}>
                        Segue
                    </Text>
                </View>
                <View style={styles.linhaumComponents}>
                    <Text style={styles.bold}>
                        Seguidores
                    </Text>
                </View>
            </View>
            <Amigo
                img="https://i.pinimg.com/564x/68/fb/be/68fbbe8a3dd3455f25a554e80c6bc287.jpg"
                name="Cursed Woody"
                xp="666"
            />
            <Amigo
                img="https://pbs.twimg.com/profile_images/1863740724967096320/-H96DQuX_400x400.jpg"
                name="Sonic Tarado"
                xp="530"
            />
            <Amigo
                img="https://media1.tenor.com/m/yZWvqGRJNlAAAAAd/5x30-training.gif"
                name="Ela vira mortal"
                xp="5X30"
            />

            <Amigo
                img="https://i.scdn.co/image/ab67616d00001e027b713e119cb7d0cf2babe805"
                name="Sigma Boy"
                xp="200"
            />  
            <View style={styles.vermais}>
                <Text>Ver mais 5</Text>
                <SetaIcon width={20} height={20}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "#FF6F61",
        borderRadius: 8,
        overflow: 'hidden'
    },
    divisao: {
        borderWidth: 2,
        borderColor: "#FF6F61",
        
    },
    linhaum: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 2,
        backgroundColor: '#FF6F61',
        borderColor: "#FF6F61",
        gap: 2,
    },
    linhaumComponents: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderColor: "#FF6F61",
        padding: 6
    },
    bold: {
        fontWeight: '700',
        color: '#000',
        fontSize: 14
    },
    vermais: {
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 2,
        borderColor: "#FF6F61",
        padding: 8,
        justifyContent: 'space-between'
    }
});

export default CardAmigos;
import { StyleSheet, Text, View, Image } from 'react-native';

function Amigo({img, name, xp}) {
    const size = 20;
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: img}}
                style={styles.img}
            />
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.text}>{xp}XP</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10
    },
    title: {
        color: '#333333',
        fontWeight: '700',
        fontSize: 16
    },
    text: {
        color: '#666666',
        fontWeight: '400',
        fontSize: 14
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 50
    }
});

export default Amigo;
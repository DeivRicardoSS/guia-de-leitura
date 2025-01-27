import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Root from "../styles/root"

function Livro({img, titulo, autor, progresso, onPress}) {
    return (
       <TouchableOpacity style={styles.container} onPress={()=>{onPress()}}>
            <Image 
                style={styles.img}
                source={{uri: img}}
            />
            <View style={styles.info}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.autor}>{autor}</Text>
                <Text style={styles.completo}>{progresso}% Completo</Text>
                <View style={styles.progresso}>
                    <View
                        style={{
                            backgroundColor: Root.primaria,
                            width: `${progresso}%`,
                            height: '100%'
                        }}
                    ></View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#E2E2E2',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 8,
        boxShadow: '0px 4px 4px #00000025',
        gap: 20,
        marginBottom: 10,
        marginTop: 10
    },
    img: {
        width: 77,
        height: 98
    },
    progresso: {
        width: '100%',
        backgroundColor: '#C9C9C9',
        height: 7
    },
    info: {
        width: '65%',
        gap: 5
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    autor: {
        fontSize: 16,
        fontWeight: 'regular'
    },
    completo: {
        fontSize: 14,
        fontWeight: 'light'
    }
});

export default Livro;
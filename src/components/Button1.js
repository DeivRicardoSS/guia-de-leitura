import { StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native";
import Root from "../styles/root";

function Button1({value, onPress}) {
    return (
        
        <TouchableOpacity
                style={styles.container}
                onPress={onPress}
        >
            {value}
        </TouchableOpacity>
        
    );
    
    
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        padding: 20,
        color: Root.fundo,
        backgroundColor: Root.primaria,
        fontWeight: 600,

        display: "flex",
        flexDirection: "row",
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,
        boxShadow: '0px 8px 0px 0px #3F38BA'
    }
});

export default Button1;
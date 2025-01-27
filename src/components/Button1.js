import { StyleSheet } from "react-native";
import { TouchableOpacity, View, Text } from "react-native";
import Root from "../styles/root";

function Button1({value, onPress, style}) {
    return (
        
        <TouchableOpacity
                style={[styles.container, style]}
                onPress={onPress}
        >
         <Text style={styles.text}>
            {value}
         </Text>
            
        </TouchableOpacity>
        
    );
    
    
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        padding: 20,
        backgroundColor: Root.primaria,
        

        display: "flex",
        flexDirection: "row",
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,
        boxShadow: '0px 8px 0px 0px #3F38BA'
    },
    text: {
        color: Root.fundo,
        fontWeight: 600,
    }
});

export default Button1;
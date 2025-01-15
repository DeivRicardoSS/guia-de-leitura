import { StyleSheet } from "react-native";
import { TextInput, View } from "react-native";
import Root from "../styles/root";

function Input1({placeholder, onChange}) {
    return (
        
        <TextInput
                style={styles.container}
                placeholder={placeholder}
                // value={value}
                onChangeText={onChange}
        />          
        
    );
    
    
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        padding: 20,
        color: Root.placeholder,
        backgroundColor: Root.fundo2,
        fontWeight: 600,

        display: "flex",
        flexDirection: "row",
        overflow: 'hidden',

        borderRadius: 10,
    }
});

export default Input1;
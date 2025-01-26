import { StyleSheet } from "react-native";
import { TextInput, View } from "react-native";
import Root from "../styles/root";

function Input1({placeholder, onChange, style, value, secureTextEntry, keyboardType}) {
    return (
        
        <TextInput
                style={[styles.container, style]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
        />          
        
    );
    
    
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
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
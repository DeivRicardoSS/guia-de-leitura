import { StyleSheet } from "react-native";
import { TextInput, View } from "react-native";

function Input2({placeholder, onChange}) {
    return (
        <TextInput
                style={styles.input}
                placeholder={placeholder}
                // value={value}
                onChangeText={onChange}
        />
    );
    
    
}

const styles = StyleSheet.create({
    
    input: {
        width: '100%',
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 6
    }
});

export default Input2;
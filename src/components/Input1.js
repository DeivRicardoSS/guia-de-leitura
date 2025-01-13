import { StyleSheet } from "react-native";
import { TextInput, View } from "react-native";
import { SvgXml } from "react-native-svg";

function Input1({Icon, placeholder, onChange}) {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icon width={30} height={30} fill="white"/>
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                // value={value}
                onChangeText={onChange}
            />
        </View>
    );
    
    
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 50,
        backgroundColor: "#E5E5E5",

        display: "flex",
        flexDirection: "row",
        overflow: 'hidden',

        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#FF5722",
        boxShadow: '0px 6px 0px #DF4C1E',
    },
    icon: {
        width: 50,
        height: "100%",
        backgroundColor: "#FF5722",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        paddingLeft: 20,
        height: "100%"
    }
});

export default Input1;
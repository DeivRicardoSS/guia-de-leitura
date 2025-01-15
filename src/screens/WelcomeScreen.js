import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, StyleSheet } from "react-native";

function WelcomeScreen() {
    return (
        <SafeAreaView>
            <Image
                source={require('../../assets/capa.jpg')}
                style = {styles.img}
            />
            <View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    img: {
        objectFit: 'cover',
        width: '100%',
        height: '70vh'
    }
});

export default WelcomeScreen;
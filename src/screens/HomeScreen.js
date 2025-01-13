import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen({navigation}) {
    return (
        
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    
});

export default HomeScreen;
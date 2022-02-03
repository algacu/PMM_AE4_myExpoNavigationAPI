import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Pantalla4 = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla 4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Pantalla4
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loader() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Getting ~~</Text>
                <Text style={styles.text2}>Awosome Weather</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffeaa7',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    textContainer: {
        paddingVertical: 200,
    },
    text1: {
        fontSize: 40,
        color: '#3498db',
        paddingHorizontal: 50,
    },
    text2: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#ff7675',
        paddingHorizontal: 50,
        paddingVertical: 7,
    },
});

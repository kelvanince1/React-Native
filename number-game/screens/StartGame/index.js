import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const StartGame = props => {
    return (
        <View style={styles.screen}>
            <Text>Game screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default StartGame;
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../../components/Card';
import Colors from '../../constants/colors';
import Input from '../../components/Input';

const StartGame = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={() => {}} color={Colors.secondaryColor} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={() => {}} color={Colors.primaryColor} /></View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGame;
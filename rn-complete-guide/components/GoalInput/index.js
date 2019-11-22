import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Course Goal"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />

            <Button
                title="Add"
                onPress={() => props.onAddGoal(enteredGoal)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      textInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: 200
      }
})

export default GoalInput;
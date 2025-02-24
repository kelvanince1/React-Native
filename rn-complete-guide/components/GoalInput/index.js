import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={addGoalHandler}
                        />
                    </View>
                    
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color="red"
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInput: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: 300
      },
      buttonContainer: {
          flexDirection: "row",
          justifyContent: 'space-around',
          width: '60%'
      },
      button: {
          width: '40%'
      }
})

export default GoalInput;
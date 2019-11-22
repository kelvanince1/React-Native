import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="Add"
          onPress={addGoalHandler}
        />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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
});

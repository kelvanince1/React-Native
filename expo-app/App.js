import React, { useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  const [initialText, setText] = useState('Open up App..js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{initialText}</Text>
      <Button 
        title="Change Text"
        onPress={() => setText('The text changed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

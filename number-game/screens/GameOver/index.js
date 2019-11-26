import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../../components/BodyText';
import TitleText from '../../components/TitleText';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is over</TitleText>
            <Image source={require('../../assets/success.png')} />
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button
                title="New Game"
                onPress={props.onRestart}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOver;
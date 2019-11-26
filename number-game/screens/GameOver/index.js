import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../../components/BodyText';
import TitleText from '../../components/TitleText';
import Colors from '../../constants/colors';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is over</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/success.png')}
                    // source={{uri: 'https://abrahamswallet.com/wp-content/uploads/2017/12/samuel-ferrara-117219-1180x770.jpg'}}
                />
            </View>
            <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
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
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOver;
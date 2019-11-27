import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import BodyText from '../../components/BodyText';
import MainButton from '../../components/MainButton';
import TitleText from '../../components/TitleText';
import Colors from '../../constants/colors';

const GameOver = props => {
    return (
        <ScrollView>
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
                <MainButton
                    onPress={props.onRestart}
                >
                    New Game
                </MainButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
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
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOver;
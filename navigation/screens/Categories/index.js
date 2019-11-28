import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Categories = props => {
    return (
        <View style={styles.screen}>
            <Text>Categories screen</Text>
            <Button
                title="See meals"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals'
                    })
                }}
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

export default Categories;
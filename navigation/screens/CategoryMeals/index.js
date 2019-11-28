import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMeals = props => {
    return (
        <View style={styles.screen}>
            <Text>CategoryMeals screen</Text>
            <Button
                title="See meal details"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail'
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

export default CategoryMeals;
import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';
import Colors from '../../constants/colors';

const CategoryMeals = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>CategoryMeals screen</Text>
            <Text>{selectedCategory.title}</Text>
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

CategoryMeals.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS == 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMeals;
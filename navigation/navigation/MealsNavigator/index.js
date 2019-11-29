import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Categories from '../../screens/Categories';
import CategoryMeals from '../../screens/CategoryMeals';
import Favorites from '../../screens/Favorites';
import MealDetail from '../../screens/MealDetail';

import Colors from '../../constants/colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: Categories
    },
    CategoryMeals: {
        screen: CategoryMeals
    },
    MealDetail: MealDetail
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS == 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Colors.secondary
    }
});

export default createAppContainer(MealsFavTabNavigator);
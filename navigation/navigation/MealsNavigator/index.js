import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; // Install this

import Categories from '../../screens/Categories';
import CategoryMeals from '../../screens/CategoryMeals';
import Favorites from '../../screens/Favorites';
import Filters from '../../screens/Filters';
import MealDetail from '../../screens/MealDetail';

import Colors from '../../constants/colors';
import Meal from '../../models/meal';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS == 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: Categories
    },
    CategoryMeals: {
        screen: CategoryMeals
    },
    MealDetail: MealDetail
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: Favorites,
    MealDetail: MealDetail
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            }
        },
        tabBarColor: Colors.primary
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            }
        },
        tabBarColor: Colors.secondary
    },
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
    barStyle: {
        backgroundColor: Colors.primary
    }
}) 
: createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans'
        },
        activeTintColor: Colors.secondary
    }
});

const FilterNavigator = createStackNavigator({
    screen: Filters
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FilterNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.secondary,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);
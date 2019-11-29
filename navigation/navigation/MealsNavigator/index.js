import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

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
    Meals: MealsNavigator,
    Favorites: Favorites
});

export default createAppContainer(MealsFavTabNavigator);
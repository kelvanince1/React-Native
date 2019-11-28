import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import CategoryGridTile from '../../components/CategoryGridTile';
import { CATEGORIES } from '../../data/dummy-data';
  
  const Categories = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile
              title={itemData.item.title}
              color={itemData.item.color}
              onSelect={() => {
                props.navigation.navigate({
                  routeName: 'CategoryMeals',
                  params: {
                    categoryId: itemData.item.id
                  }
                })
              }}
            />          
        );
      };

    return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    );
  };

  Categories.navigationOptions = {
      headerTitle: 'Meal Categories'
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Categories;
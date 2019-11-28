import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';
import Colors from '../../constants/colors';
  
  const Categories = props => {
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({
                  routeName: 'CategoryMeals',
                  params: {
                    categoryId: itemData.item.id
                  }
                })
            }}>
               <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
          
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
      headerTitle: 'Meal Categories',
      headerStyle: {
          backgroundColor: Platform.OS == 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default Categories;

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/transactionScreen'
import Searchscreen from './screens/Searchscreen'

export default function App() {
  return (
    <AppContainer
      
      />
  );
}
const TabNavigator = createBottomTabNavigator({
  transaction:{
    screen:TransactionScreen,
  },
  search:{screen:SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)
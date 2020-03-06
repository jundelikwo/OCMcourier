import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React, { Component, useState } from 'react'
import {
  Image, View
} from 'react-native';
//screens
import { AccountScreen } from '../screens/account';
import { PendingScreen } from '../screens/pending';
import { HistoryScreen } from '../screens/history';
import { DirectionScreen } from '../screens/direction';
import { ActiveScreen } from '../screens/active';

import Icon from 'react-native-vector-icons/Ionicons';

const pendingIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/pending.png')} />
);
const historyIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/history.png')} />
);
const activeIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/active.png')} />
);
const mapIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/map.png')} />
);
const accountIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/account.png')} />
);


const Tab = createMaterialBottomTabNavigator(
  {
    Pending: {
      screen: PendingScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Pending',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>),
      },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'History',
        // tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>),
      },
    },
    Active: {
      screen: ActiveScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Active',
        // tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>),
      },
    },
    Direction: {
      screen: DirectionScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Direction',
        // tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>),
      },
    },

    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Account',
        // tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>),
      },

    },
  },
  {
    initialRouteName: "Pending",
    activeColor: "#FD901C",
    inactiveColor: "#8B95A6",
    barStyle: { backgroundColor: '#fff' },
    labelStyle: { fontSize: 12 }
  }
);
export const AppNavigator = createAppContainer(Tab);
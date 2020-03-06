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

// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/FontAwesome5';
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
            <IconF style={[{ color: tintColor }]} size={25} name={'stream'} />
          </View>),
      },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'History',

        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'history'} />
          </View>),
      },
    },
    Active: {
      screen: ActiveScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Active',

        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconF style={[{ color: tintColor }]} size={25} name={'shipping-fast'} />
          </View>),
      },
    },
    Direction: {
      screen: DirectionScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Direction',

        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconF style={[{ color: tintColor }]} size={25} name={'route'} />
          </View>),
      },
    },

    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Account',

        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'id-badge'} />
          </View>),

      },


    },
  },
  {
    initialRouteName: "Pending",
    activeColor: "#FD901C",
    inactiveColor: "#8B95A6",
    barStyle: { backgroundColor: '#fff', paddingVertical: 3 },
    labelStyle: { fontSize: 12, },
    shifting: true,
    labeled: true,
    // useLayoutAnimation: true
    backBehavior: 'history'
    // backBehavior: { history },
    // RouteConfigs: {
    //   backBehavior: 'history'
    // },

  }
);
export const AppNavigator = createAppContainer(Tab);
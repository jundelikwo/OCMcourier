import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen } from '../screens/login';
import { PendingScreen } from '../screens/pending';
import { HistoryScreen } from '../screens/history';
import { SingleOrderScreen } from '../screens/singleOrder';




const HomeNavigator = createStackNavigator({
  Login: LoginScreen,
  Pending: PendingScreen,
  History: HistoryScreen,
  SingleOrder: SingleOrderScreen

}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);



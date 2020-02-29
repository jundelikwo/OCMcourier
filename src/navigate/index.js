import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//screens
import { AccountScreen } from '../screens/account';
import { PendingScreen } from '../screens/pending';
import { HistoryScreen } from '../screens/history';
import { SingleOrderScreen } from '../screens/singleOrder';
import { LoginScreen } from '../screens/login';





const HomeNavigator = createStackNavigator({
  Login: LoginScreen,
  Pending: PendingScreen,
  History: HistoryScreen,
  Account: AccountScreen,
  SingleOrder: SingleOrderScreen

}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);



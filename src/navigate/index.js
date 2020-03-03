import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//screens
import { AccountScreen } from '../screens/account';
import { PendingScreen } from '../screens/pending';
import { HistoryScreen } from '../screens/history';
import { DirectionScreen } from '../screens/direction';
import { SingleOrderScreen } from '../screens/singleOrder';
import { PasswordScreen } from '../screens/password';
import { ProfileScreen } from '../screens/presonal';
import { ActiveScreen } from '../screens/active';
import { LoginScreen } from '../screens/login';





const HomeNavigator = createStackNavigator({
  Login: LoginScreen,
  Pending: PendingScreen,
  History: HistoryScreen,
  Account: AccountScreen,
  Direction: DirectionScreen,
  SingleOrder: SingleOrderScreen,
  Password: PasswordScreen,
  Profile: ProfileScreen,
  Active: ActiveScreen,


}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);



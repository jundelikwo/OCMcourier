import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen } from '../screens/login';




const HomeNavigator = createStackNavigator({

  Login: LoginScreen,

}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);



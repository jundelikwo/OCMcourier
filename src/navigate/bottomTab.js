import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react'
import { View } from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome5';

//screens
import { AccountScreen } from '../screens/account';
import { PendingScreen } from '../screens/pending';
import { HistoryScreen } from '../screens/history';
import { DirectionScreen } from '../screens/direction';
import { ActiveScreen } from '../screens/active';



const Tab = createMaterialBottomTabNavigator(
  {
    Pending: {
      screen: PendingScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Pending',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconF style={[{ color: tintColor }]} size={20} name={'stream'} />
          </View>),
      },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'History',

        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconF style={[{ color: tintColor }]} size={20} name={'history'} />
          </View>),
      },
    },
    Active: {
      screen: ActiveScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Active',
        // shipping- fast
        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconF style={[{ color: tintColor }]} size={20} name={'shipping-fast'} />
          </View>),
      },
    },
    Direction: {
      screen: DirectionScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Direction',

        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconF style={[{ color: tintColor }]} size={20} name={'route'} />
          </View>),
      },
    },

    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Account',

        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconF style={[{ color: tintColor }]} size={20} name={'user-alt'} />
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
    useLayoutAnimation: true,
    backBehavior: 'history',
    tabBarVisibile: true,
    navigationOptions: {
      tabBarVisibile: true
    },

  }
);
export const AppNavigator = createAppContainer(Tab);
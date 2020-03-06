// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// // import { Icon } from 'react-native-ui-kitten';
// import {
//   Icon, Layout, Text, Avatar, TopNavigationAction,
//   TopNavigation, Divider, Toggle, Card, Button, CardHeader,
//   BottomNavigation,
//   BottomNavigationTab,
// } from '@ui-kitten/components';

// import { PendingScreen } from '../screens/pending';
// import { ActiveScreen } from '../screens/active';

// const TabNavigator = createBottomTabNavigator(
//   {
//     PendingScreen: {
//       screen: PendingScreen,
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => (
//           <Icon
//             name="home-outline"
//             width={32}
//             height={32}
//             fill={focused ? '#111' : '#939393'}
//           />
//         ),
//       },
//     },
//     ActiveScreen: {
//       screen: ActiveScreen,
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => (
//           <Icon
//             name="plus-square-outline"
//             width={32}
//             height={32}
//             fill={focused ? '#111' : '#939393'}
//           />
//         ),
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       showLabel: false,
//     },
//   },
// );
// export const AppNavigator = createAppContainer(TabNavigator);
// // export default createAppContainer(TabNavigator);
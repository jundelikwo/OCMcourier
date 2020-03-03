// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image } from 'react-native'
// //screens
// import { AccountScreen } from '../screens/account';
// import { PendingScreen } from '../screens/pending';
// import { HistoryScreen } from '../screens/history';
// import { ActiveScreen } from '../screens/active';


// const BottomTab = createBottomTabNavigator();

// //icons
// const pendingIcon = React.createElement(Image, {
//   source: require('../assets/pending.png')
// });
// const historyIcon = React.createElement(Image, {
//   source: require('../assets/history.png')
// });
// const activeIcon = React.createElement(Image, {
//   source: require('../assets/active.png')
// });
// const mapIcon = React.createElement(Image, {
//   source: require('../assets/map.png')
// });
// const accountIcon = React.createElement(Image, {
//   source: require('../assets/account.png')
// });


// export const BottomNavigator = () => (
//   <BottomTab.Navigator tabBar={props => <HomeTabBar {...props} />}>
//     <BottomTab.Screen
//       name={Pending}
//       component={PendingScreen}
//       options={{ title: 'Pending', tabBarIcon: pendingIcon }}
//     />
//     <BottomTab.Screen
//       name={History}
//       component={HistoryScreen}
//       options={{ title: 'History', tabBarIcon: historyIcon }}
//     />
//     <BottomTab.Screen
//       name={Active}
//       component={ActiveScreen}
//       options={{ title: 'Active', tabBarIcon: activeIcon }}
//     />
//     <BottomTab.Screen
//       name={Active}
//       component={ActiveScreen}
//       options={{ title: 'Active', tabBarIcon: mapIcon }}
//     />
//     <BottomTab.Screen
//       name={Account}
//       component={AccountScreen}
//       options={{ title: 'Account', tabBarIcon: accountIcon }}
//     />

//   </BottomTab.Navigator>
// );


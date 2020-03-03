import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

//screens
import { AccountScreen } from '../screens/account';
import { PendingScreen } from '../screens/pending';
import { HistoryScreen } from '../screens/history';
import { ActiveScreen } from '../screens/active';

const BottomTab = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => {

  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        <BottomNavigationTab title='Pending' />
        <BottomNavigationTab title='History' />
        <BottomNavigationTab title='Active' />
        <BottomNavigationTab title='Account' />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name='Pending' component={PendingScreen} />
    <BottomTab.Screen name='History' component={HistoryScreen} />
    <BottomTab.Screen name='Active' component={ActiveScreen} />
    <BottomTab.Screen name='Account' component={AccountScreen} />
  </BottomTab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
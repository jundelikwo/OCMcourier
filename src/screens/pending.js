import React from 'react'
import {
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {
  Divider
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import OrderStatus from '../components/orderStatus';
import PendingCards from '../components/pendingCards';

export const PendingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav title='Pending Orders' />
      <Divider />
      <View style={{ flex: 1 }}>
        <OrderStatus />
        <ScrollView >
          <PendingCards />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};


import React, { useState } from 'react'
import {
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {
  Divider,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import StepIndicator from '../components/stepIndicator'
import UserLeft from '../components/stepUserLeft';
import UserRight from '../components/stepUserRight';

export const ActiveScreen = ({ navigation }) => {

  const [orders, setOrders] = useState([
    {
      'title': 'Crunchies Restaurant',
      'status': 'Picked Up',
      'distance': '1.3km 2min'
    },
    {
      'title': 'The Spot',
      'status': 'Processed',
      'distance': '1.3km 2min'
    },
    {
      'title': 'Pepper Roni',
      'status': 'Picked Up',
      'distance': '0.3km 1min'
    },
    {
      'title': 'Happy Food',
      'status': 'Processed',
      'distance': '9.3km 5min'
    }
  ]);

  const lastIndexOfOrder = orders.length - 1;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav title='Active Order' />
      <Divider />
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/grid.png')} style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 50, }}>
            {
              orders.map((order, i) => {
                return (
                  <StepIndicator order={order} index={i} key={i} />
                )
              })
            }
            {lastIndexOfOrder % 2 == 0 ? (<UserLeft title='Buyer' status='Waiting' />) : (<UserRight title='Buyer' status='Waiting' />)}
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView >
  )
};


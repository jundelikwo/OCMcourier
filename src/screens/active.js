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
      'orderCount': 1,
      'title': 'Crunchies Restaurant',
      'status': true,
      'distance': '1km ',
      'time': '05mins',
      'address': '15 Harcourt Street, Calabar.',
      'phone': '+23409256345'

    },
    {
      'orderCount': 2,
      'title': 'The Spot',
      'status': false,
      'distance': '1.5km ',
      'time': '12mins',
      'address': '36 Abasi Edem Street, Calabar.',
      'phone': '+23412345678'
    },
    {
      'orderCount': 3,
      'title': 'Pepper Roni',
      'status': false,
      'distance': '1.3km ',
      'time': '10mins',
      'address': '10 State Housing, Calabar.',
      'phone': '+234098765432'
    },
    {
      'orderCount': 4,
      'title': 'Happy Food',
      'status': false,
      'distance': '2.1km ',
      'time': '15mins',
      'address': ' 6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.',
      'phone': '+238177024847'
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
                  <StepIndicator navigation={navigation} order={order} index={i} key={i} />
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


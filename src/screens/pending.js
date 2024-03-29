import React, { useState } from 'react'
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
import PendingBuyer from '../components/pendingBuyer';

export const PendingScreen = ({ navigation }) => {
  const [buyer, setBuyer] = useState(
    {
      'title': 'Godswill Effiong Okokon',
      'status': false,
      'distance': '5km ',
      'address': '15 Harcourt Street, Calabar.',
      'phone': '+2348177024847'
    }
  );
  const [overviewOrder, setoverviewOrder] = useState(
    {
      'title': 'Godswill Effiong Okokon',
      'status': true,
      'distance': '6.2km',
      'totalTime': '42mins',
      'address': '15 Harcourt Street, Calabar.',
      'phone': '+2348177024847',
      'stops': '4',
      'time': '2 mins'
    }
  )
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav title='Pending Orders' />
      <Divider />
      <View style={{ flex: 1 }}>
        <OrderStatus overviewOrder={overviewOrder} />
        <ScrollView >
          {
            orders.map((order, i) => {
              return (
                <PendingCards navigation={navigation} buyer={buyer} order={order} index={i} key={i} />
              )
            })
          }
          <PendingBuyer buyer={buyer} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};
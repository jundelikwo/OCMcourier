import React, { useState } from 'react'
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import {
  Divider,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import HistoryOverview from '../components/historyOverview';

export const HistoryScreen = ({ navigation }) => {
  const [orderHistory, setOrderHistory] = useState([
    {
      'title': 'Godswill Okokon',
      'status': false,
      'stops': '4',
      'date': '07 mins',
      'details': {
        'header': {
          'title': 'Godswill Effiong Okokon',
          'status': false,
          'stops': '4',
          'date': '02/2019',
          'orderNo': '32391',
          'distance': '2.6km',
        },
        'body': [
          {
            'orderCount': 1,
            'title': 'Crunchies Restaurant',
            'status': true,
            'distance': '1.0km ',
            'time': '05mins',
            'address': '15 Harcourt Street, Calabar.',
            'phone': '+23409256345'

          },
          {
            'orderCount': 2,
            'title': 'The Spot',
            'status': true,
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
        ]
      }
    },
    {
      'title': 'Esther Adeyemo',
      'status': true,
      'stops': '3',
      'date': '2 week',
      'details': {
        'header': {
          'title': 'Esther Adeyemo',
          'status': true,
          'stops': '3',
          'date': '03/2019',
          'orderNo': '32392',
          'distance': '7.8km',
        },
        'body': [
          {
            'orderCount': 1,
            'title': 'Bole Rose',
            'status': true,
            'distance': '2.0km ',
            'time': '09mins',
            'address': '43 Etta Agbor, Calabar.',
            'phone': '+23409256123'

          },
          {
            'orderCount': 2,
            'title': 'Crunchies Plus',
            'status': true,
            'distance': '2.5km ',
            'time': '15mins',
            'address': '91 Bogobiri Street, Calabar.',
            'phone': '+23412345678'
          },
          {
            'orderCount': 3,
            'title': 'Cripsy Chicken',
            'status': true,
            'distance': '3.3km ',
            'time': '21mins',
            'address': '101 Ndidem Usang Iso Road, Calabar.',
            'phone': '+234098765432'
          },
        ]
      }
    }
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav title='Order History' />
      <Divider />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ flex: 1 }}>
        <View>
          {
            orderHistory.map((order, i) => {
              return (
                <HistoryOverview navigation={navigation} order={order} index={i} key={i} />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView >
  )
};
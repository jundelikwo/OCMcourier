import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import {
  Text, Avatar, Card,
} from '@ui-kitten/components';
import IconI from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SingleOrderScreen from '../screens/singleOrder';

export default HistoryOverview = ({ navigation, order }) => {
  const navigateSingleOrder = () => {
    requestAnimationFrame(() => {
      navigation.navigate('SingleOrder', {
        order: order
      });
    })
  };
  const orderState = order.status ? 'Delivered' : 'Waiting'
  return (
    <Card style={styles.orderHeadCard}>
      <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder} >
        {/* {console.log(order.details)} */}
        <View style={styles.avatar} >
          <Avatar source={require('../assets/person.png')} />
        </View>
        <View style={styles.orderHeadContent}>
          <View style={{ flex: 2, }}>
            <Text style={styles.clientName}>{order.title}</Text>
            <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>{order.stops} <Text style={styles.dot}>.</Text></Text> {orderState}</Text>
            {order.status ? <Icon style={{ bottom: 17.5, left: 112, }} name='ello' size={10} color={'#5AC966'} /> : <Icon style={{ bottom: 17.5, left: 103, }} name='ello' size={10} color={'#FD901C'} />}
          </View>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={styles.date}>{order.date} ago</Text>
            <IconI color={'#747D8C'} name='ios-arrow-forward' size={25} />
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  )
};

const styles = StyleSheet.create({
  orderHeadCard: {
    margin: 0, padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 2.49,
    elevation: 3,
    flex: 1,
    marginBottom: -10
  },
  orderHead: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    flex: 1,
    alignItems: 'flex-start'
  },
  orderHeadContent: {
    flex: 4,
    flexDirection: "row",
    alignItems: 'center',
  },
  clientName: {
    fontSize: 16,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    marginTop: 2,
    width: 150,
    height: 20,
  },
  dot: {
    fontSize: 30,
    color: '#747D8C',
  },
  stops: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
  },
  stopsCountNum: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold'
  },
  date: {
    fontSize: 9,
    fontFamily: 'Muli',
    color: '#747D8C',
    justifyContent: 'flex-end',
    flex: 1,
    alignSelf: 'flex-start',
  },
});
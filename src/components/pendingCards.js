import React, { useState } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Text, Divider, Card,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default PendingCards = ({ order, index, navigation }) => {
  const orderState = order.status ? 'Picked Up' : 'Processed'
  return (
    <View>
      <Card style={styles.card} >
        <Text style={styles.stopsCountText}>
          Stop {order.orderCount}
        </Text>
        <Text style={styles.restaurantName}>
          {order.title}
        </Text>
        <Text style={styles.timeToKilo}>{order.time}<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
          <Text style={styles.dot}>.</Text> {orderState}</Text>
        </Text>
        {order.status ? <Icon style={{ bottom: 17.5, left: 165, }} name='ello' size={10} color={'#5AC966'} /> : <Icon style={{ bottom: 17.5, left: 168, }} name='ello' size={10} color={'#FD901C'} />}
        <Divider style={styles.divider} />
        <View style={styles.addrPhone}>
          <Text style={styles.address}>Address:</Text>
          <Text style={styles.addressContent}>
            {order.address}
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.addrPhone}>
          <Text style={styles.address}>Phone:</Text>
          <Text style={styles.addressContent}>
            {order.phone}
          </Text>
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  timeToKilo: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    marginTop: 2
  },
  dot: {
    fontSize: 30,
    color: '#747D8C',
  },
  card: {
    marginVertical: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 0.5,

    elevation: 0.5,
  },
  stopsCountText: {
    fontSize: 12.5,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'normal',
  },
  restaurantName: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#515C6F',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },

  orderItemStatus: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
  },
  divider: {
    padding: 0.5,
    backgroundColor: '#b8bcc4'
  },
  addrPhone: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6
  },
  address: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    fontStyle: 'normal',
    flex: 1,
  },
  addressContent: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontStyle: 'normal',
    flex: 1.4,
    textAlign: 'left',
    lineHeight: 16
  },
  statusStopIcon: {
    bottom: 17.5, marginLeft: 173, marginBottom: -7
  }
});
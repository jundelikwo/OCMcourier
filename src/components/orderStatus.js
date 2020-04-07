import React, { useState } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Text, Avatar, Card,
} from '@ui-kitten/components';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default OrderStatus = ({ overviewOrder }) => {
  //order status
  const [order, setOrder] = useState({
    active: false,
    status: "Not Active"
  });
  const { active, status } = order;
  const onCheckedChangeOrder = (isChecked) => {
    // console.warn("isChecked", isChecked)
    setOrder({ ...order, status: status == 'Active' ? "Not Active" : "Active", active: isChecked })
  };
  const orderState = overviewOrder.status ? 'Processed' : 'Processing'
  return (
    <Card style={styles.orderHeadCard}>
      <View style={styles.orderHead}>
        <View style={styles.avatar} >
          <Avatar style={{}} size='large' source={require('../assets/person.png')} />
        </View>
        <View style={styles.orderHeadContent}>
          <View style={{ flex: 2 }}>
            <Text style={styles.clientName}>{overviewOrder.title}</Text>
            <Text style={styles.timeToKilo}>{overviewOrder.totalTime}<Text style={styles.dot}> .</Text> 2.6km</Text>
            <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>{overviewOrder.stops} <Text style={styles.dot}>.</Text></Text> {orderState}</Text>

            {/* <Icon style={[styles.statusIcon]} name='ello' size={10} /> */}
            {overviewOrder.status ? <Icon style={{
              bottom: 17.5,
              left: 120,
              // color: '#FD901C'
            }} name='ello' size={10} color={'#5AC966'} /> : <Icon style={{
              bottom: 16.6,
              left: 123,
              // color: '#FD901C'
            }} name='ello' size={10} color={'#FD901C'} />}

          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'space-evenly', bottom: 11 }}>
            <Text style={styles.time}>{overviewOrder.time} ago</Text>
            <ToggleSwitch
              isOn={active}
              onColor='#FD901C'
              offColor="#747D8C"
              label={'Status'}
              labelStyle={styles.toggleStatusText}
              size='small'
              onToggle={onCheckedChangeOrder}
            />

          </View>
        </View>
      </View>
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
    elevation: 1,
    overflow: 'visible'

  },
  orderHead: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    paddingVertical: 32,
  },
  avatar: {
    flex: 1,
    alignItems: 'flex-start',
    // alignSelf: 'center',
  },
  orderHeadContent: {
    flex: 4,
    flexDirection: "row",
    alignItems: 'center'
  },
  clientName: {
    fontSize: 16,
    fontFamily: 'Muli',
    color: '#FD901C',
    fontWeight: 'bold',
    width: 195,
    height: 20
  },
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
  stops: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    marginTop: -2,
  },
  statusIcon: {
    bottom: 16.6,
    left: 125,
    color: '#FD901C'
  },
  stopsCountNum: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    marginTop: -2,
    fontWeight: 'bold'
  },
  time: {
    fontSize: 10,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#747D8C',
    fontSize: 10,
    marginLeft: 33,
    marginBottom: 40
  },
  toggleStatusText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
  },
})
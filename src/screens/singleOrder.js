import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  Text, Avatar, TopNavigationAction,
  Divider, Card,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconI from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const SingleOrderScreen = ({ navigation }) => {
  const order = navigation.state.params.order.details

  console.log(order)
  //nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    })
  };
  const BackIcon = () => (
    <IconI style={[{ color: '#515C6F', marginRight: -29, }]} name='ios-arrow-back' size={25} />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} style={[{ padding: 5 }]} />
  );
  const orderStateHeader = order.header ? 'Delivered' : 'Picked Up';

  return (
    <View style={{ flex: 1 }}>
      <TopNav title='Order History' leftControl={BackAction()} />
      <Divider />
      <Card style={styles.orderHeadCard}>
        <View style={styles.orderHead}>
          <View style={styles.avatar} >
            <Avatar style={{}} size='large' source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2 }}>
              <Text style={styles.clientName}>{order.header.title}</Text>
              <Text style={styles.orderNumKilo}>Order No. {order.header.orderNo}
                <Text style={styles.dot}>.</Text>
                {order.header.distance}
              </Text>
              <Text style={styles.stops}>Stops:
                <Text style={styles.stopsCountNum}>
                  {order.header.stops}
                  <Text style={styles.dot}>.</Text>
                </Text>
                {orderStateHeader}
              </Text>
              {order.header ? <Icon style={{ bottom: 17.5, left: 105, }} name='ello' size={10} color={'#5AC966'} /> : <Icon style={{ bottom: 17.5, left: 105, }} name='ello' size={10} color={'#FD901C'} />}
            </View>
            <View style={{ flex: 1, }}>
              <Text style={styles.time}>{order.header.date} </Text>
            </View>
          </View>
        </View>
      </Card>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ flex: 1 }}>

        {
          order.body.map((body, i) => {
            return (
              <Card style={styles.card} index={i} key={i}>
                <Text style={styles.stopsCountText}>
                  Stop {body.orderCount}
                </Text>
                <Text style={styles.restaurantName}>
                  {body.title}
                </Text>
                <Text style={styles.orderNumKilo}>{body.time}<Text style={styles.dot}> .</Text>  {body.distance} <Text style={styles.orderItemStatus}>
                  <Text style={styles.dot}>.</Text>
                  {body.status ? <Text style={styles.orderItemStatus}> Delivered</Text> : <Text style={styles.orderItemStatus}> Picked Up</Text>}</Text>
                </Text>
                {body.status ? <Icon style={{ bottom: 17.5, left: 167, marginBottom: -7 }} name='ello' size={10} color={'#5AC966'} /> : <Icon style={{ bottom: 17.5, left: 172, marginBottom: -7 }} name='ello' size={10} color={'#FD901C'} />}
                <Divider style={styles.divider} />
                <View style={styles.addrPhone}>
                  <Text style={styles.address}>Address:</Text>
                  <Text style={styles.addressContent}>
                    {body.address}
                  </Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.addrPhone}>
                  <Text style={styles.address}>Phone:</Text>
                  <Text style={styles.addressContent}>
                    {body.phone}
                  </Text>
                </View>
              </Card>
            )
          })
        }

      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({

  orderHeadCard: {
    margin: 1, padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 2.49,
    elevation: 1,

  },
  orderHead: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    paddingVertical: 32,
  },
  avatar: {
    flex: 1,
    alignItems: 'flex-start'
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
    height: 20,
  },
  orderNumKilo: {
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
    fontWeight: 'bold',
    color: '#747D8C',
    fontSize: 10,
    marginLeft: 33,

  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    right: 50,
    position: 'absolute',
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
  statusIcon: {
    bottom: 17.6,
    left: 115
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
  statusPickupIcon: {
    bottom: 17.5,
    marginLeft: 167,
    marginBottom: -7
  }
});

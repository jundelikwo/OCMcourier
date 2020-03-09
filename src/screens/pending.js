import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import {
  Text, Avatar,
  TopNavigation, Divider, Toggle, Card, Layout,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native';
//  icons

let red = "DB463B";
let green = "5AC966"

export const PendingScreen = ({ navigation }) => {
  //driver status
  const [available, setAvailable] = useState({
    checked: true,
    text: "Available"
  });
  const { checked, text } = available;

  const onCheckedChangeCourier = (isChecked) => {
    // requestAnimationFrame(() => {
    // console.warn("isChecked", isChecked)
    setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
    // })
  };


  const availableToggle = () => (

    <View style={{ marginRight: 18 }}>
      <ToggleSwitch
        isOn={checked}
        onColor='#FD901C'
        offColor="#747D8C"
        label={available.text}
        labelStyle={styles.toggleText}
        size='meduim'
        onToggle={onCheckedChangeCourier}
      />
    </View>
  );
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


  return (
    <View >

      <TopNavigation title='Pending Orders' style={styles.topNavigation}
        titleStyle={styles.title} rightControls={availableToggle()} />
      <Divider />
      <View style={{ height: Dimensions.get('window').height - 135, zIndex: 0, }}>
        <Card style={styles.orderHeadCard}>
          <View style={styles.orderHead}>
            <View style={styles.avatar} >
              <Avatar style={{}} size='large' source={require('../assets/person.png')} />
            </View>
            <View style={styles.orderHeadContent}>
              <View style={{ flex: 2 }}>
                <Text style={styles.clientName}>Brown Samson Dappa</Text>
                <Text style={styles.timeToKilo}>20mins<Text style={styles.dot}> .</Text> 2.6km</Text>
                <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processing</Text>
                {/* <Icon
                name='droplet'
                width={12}
                height={12}
                fill='#DB463B'
                style={styles.statusIcon}
              /> */}
                {/* <Icon style={[{ color: '#DB463B', }]} size={18} name={'circle-o'} /> */}
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'space-evenly', bottom: 3 }}>
                <Text style={styles.time}>2 mins ago</Text>

                <ToggleSwitch
                  isOn={active}
                  onColor='#FD901C'
                  offColor="#747D8C"
                  label={'Status'}
                  labelStyle={styles.toggleStatusText}
                  size='meduim'
                  onToggle={onCheckedChangeOrder}
                />
                {/* </View> */}
              </View>
            </View>
          </View>
        </Card>
        <ScrollView>
          <Card style={styles.card} >
            <Text style={styles.stopsCountText}>
              Stop 1
          </Text>
            <Text style={styles.restaurantName}>
              Crunchies Restaurant
          </Text>
            <Text style={styles.timeToKilo}>10mins<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
              <Text style={styles.dot}>.</Text> Processed</Text>
            </Text>
            <Icon
              name='droplet'
              width={12}
              height={12}
              fill='#5AC966'
              style={styles.statusStopIcon}
            />
            <Divider style={styles.divider} />
            <View style={styles.addrPhone}>
              <Text style={styles.address}>Address:</Text>
              <Text style={styles.addressContent}>
                6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.
            </Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.addrPhone}>
              <Text style={styles.address}>Phone:</Text>
              <Text style={styles.addressContent}>
                +234 817 496 9237
            </Text>
            </View>
          </Card>

          <Card style={styles.card} >
            <Text style={styles.stopsCountText}>
              Stop 2
          </Text>
            <Text style={styles.restaurantName}>
              The Spot
          </Text>
            <Text style={styles.timeToKilo}>10mins<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
              <Text style={styles.dot}>.</Text> Processing </Text>
            </Text>
            {/* <Icon
            name='droplet'
            width={12}
            height={12}
            fill='#DB463B'
            style={styles.statusStopIcon}
          /> */}
            <Divider style={styles.divider} />
            <View style={styles.addrPhone}>
              <Text style={styles.address}>Address:</Text>
              <Text style={styles.addressContent}>
                6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.
            </Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.addrPhone}>
              <Text style={styles.address}>Phone:</Text>
              <Text style={styles.addressContent}>
                +234 817 496 9237
            </Text>
            </View>
          </Card>


          <Card style={styles.card} >
            <Text style={styles.stopsCountText}>
              Stop 3
          </Text>
            <Text style={styles.restaurantName}>
              Pepper Roni
          </Text>
            <Text style={styles.timeToKilo}>10mins<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
              <Text style={styles.dot}>.</Text> Processed </Text>
            </Text>
            <Icon
              name='droplet'
              width={12}
              height={12}
              fill='#5AC966'
              style={styles.statusStopIcon}
            />
            <Divider style={styles.divider} />
            <View style={styles.addrPhone}>
              <Text style={styles.address}>Address:</Text>
              <Text style={styles.addressContent}>
                6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.
            </Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.addrPhone}>
              <Text style={styles.address}>Phone:</Text>
              <Text style={styles.addressContent}>
                +234 817 496 9237
            </Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.stopsCountText}>
              Deliver to
          </Text>
            <Text style={styles.restaurantName}>
              Brown Samson Dappa
          </Text>
            <Text style={styles.timeToKilo}>1.3km</Text>
            <Divider style={styles.divider} />
            <View style={styles.addrPhone}>
              <Text style={styles.address}>Address:</Text>
              <Text style={styles.addressContent}>
                6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.
            </Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.addrPhone}>
              <Text style={styles.address}>Phone:</Text>
              <Text style={styles.addressContent}>
                +234 817 496 9237
            </Text>
            </View>
          </Card>

        </ScrollView>
      </View>

    </View>

  )

};

const styles = StyleSheet.create({
  topNavigation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.58,
    shadowRadius: 1,
    elevation: 3,
    // paddingTop: StatusBar.currentHeight / 2.5,
    // right: 9,
    // marginBottom: 10,
    paddingVertical: 5,
    // marginTop: 22,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green'
  },
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',
    marginLeft: 18
    // justifyContent: 'flex-end'
    // backgroundColor: 'red'

  },
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
    // marginTop: 6
    // zIndex: 1
    overflow: 'visible'

  },
  orderHead: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    paddingVertical: 32,
    // backgroundColor: 'green'
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
  toggleStatus: {
    marginLeft: 13,
    marginTop: -33,
    transform: [{
      scaleX: moderateScale(0.7, 0.1)
    }, {
      scaleY: moderateScale(0.7, 0.2)
    }],
    color: '#FD901C',

  },
  toggleStatusText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    // marginLeft: -99
  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',

    // right: 50,
    // position: 'absolute',
    // top: 3
  },
  toggle: {
    margin: 5,
    flex: 1,
    justifyContent: 'flex-end',
    transform: [{
      scaleX: moderateScale(0.8, 0.1)
    }, {
      scaleY: moderateScale(0.8, 0.2)
    }]
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
    bottom: 16.6,
    left: 119,
    color: '#828282'
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
    bottom: 17.5, marginLeft: 170, marginBottom: -7
  }

});

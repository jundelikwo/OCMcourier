import React, { Component, useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-navigation';
import {
  Icon, Layout, Text, Avatar, TopNavigationAction,
  TopNavigation, Divider, Toggle, Card, Button, CardHeader,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';
//  icons
const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);
const Droplet = (style) => (
  <Icon {...style} name='droplet' fill="#FF6B51" />
);
const DropletGreen = (style) => (
  <Icon {...style} name='droplet' fill="#7CEA7E" />
);
const Clock = (style) => (
  <Icon {...style} name='clock' fill="#FD901C" />
);
const History = (style) => (
  <Icon {...style} name='sync' />
);
const Imager = (style) => (
  <Image style={{
    width: 20,
    height: 20
  }} source={require('../assets/loginVector.png')} />
);
let red = "DB463B";
let green = "5AC966"

export const SingleOrderScreen = ({ navigation }) => {
  //driver status
  const [available, setAvailable] = useState({
    checked: true,
    text: "Not Available"
  });
  const { checked, text } = available;

  const onCheckedChangeCourier = (isChecked) => {
    // console.warn("isChecked", isChecked)
    setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
  };

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


  //nav
  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateHistory = () => {
    navigation.navigate('History');
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);



  const availableToggle = () => (
    <Toggle
      style={styles.toggle}
      text={available.text}
      text={'Availablity'}
      textStyle={styles.toggleText}
      onChange={onCheckedChangeCourier}
      checked={checked}
    // onPress={this.ToggleAvailability}
    />
  );

  return (
    <View style={{ backgroundColor: '#f2f3f4' }}>

      <TopNavigation title='Order History' style={styles.topNavigation}
        titleStyle={styles.title} leftControl={BackAction()} rightControls={availableToggle()} />
      <Divider />

      <Card style={styles.orderHeadCard}>
        <View style={styles.orderHead}>
          <View style={styles.avatar} >
            <Avatar style={{}} size='large' source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2 }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>
              <Text style={styles.orderNumKilo}>Order No. 38392 <Text style={styles.dot}>.</Text> 2.6km</Text>
              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Delivered</Text>
              <Icon
                name='droplet'
                width={12}
                height={12}
                fill='#5AC966'
                style={styles.statusIcon}
              />
            </View>
            <View style={{ flex: 1, }}>
              <Text style={styles.time}>02/2019 </Text>

            </View>
          </View>
        </View>
      </Card>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: Dimensions.get('window').height - 200 }}>
        <Card style={styles.card} >
          <Text style={styles.stopsCountText}>
            Stop 1
          </Text>
          <Text style={styles.restaurantName}>
            Crunchies Restaurant
          </Text>
          <Text style={styles.orderNumKilo}>10mins<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
            <Text style={styles.dot}>.</Text> Picked Up</Text>
          </Text>
          <Icon
            name='droplet'
            width={12}
            height={12}
            fill='#5AC966'
            style={styles.statusPickupIcon}
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
          <Text style={styles.orderNumKilo}>10mins<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
            <Text style={styles.dot}>.</Text> Picked Up </Text>
          </Text>
          <Icon
            name='droplet'
            width={12}
            height={12}
            fill='#5AC966'
            style={styles.statusPickupIcon}
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
            Stop 3
          </Text>
          <Text style={styles.restaurantName}>
            Pepper Roni
          </Text>
          <Text style={styles.orderNumKilo}>10mins<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
            <Text style={styles.dot}>.</Text> Picked Up </Text>
          </Text>
          <Icon
            name='droplet'
            width={12}
            height={12}
            fill='#5AC966'
            style={styles.statusPickupIcon}
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
            Delivered to
          </Text>
          <Text style={styles.restaurantName}>
            Brown Samson Dappa
          </Text>
          <Text style={styles.orderNumKilo}>1.3km</Text>
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
      <BottomNavigation
        selectedIndex={selectedIndex}
        appearance='noIndicator'
        onSelect={setSelectedIndex}>
        <BottomNavigationTab title='Pending' titleStyle={{ color: '#FD901C' }} />
        <BottomNavigationTab title='History' onPressIn={navigateHistory} titleStyle={{ color: '#FD901C' }} />
        <BottomNavigationTab title='Active' titleStyle={{ color: '#FD901C' }} />
        <BottomNavigationTab title='Direction' titleStyle={{ color: '#FD901C' }} />
        <BottomNavigationTab title='Account' titleStyle={{ color: '#FD901C' }} />
      </BottomNavigation>
    </View>

  )

};

const styles = StyleSheet.create({
  topNavigation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1.58,
    shadowRadius: 16.00,
    elevation: 6,
    top: 16,
    right: 9,
    marginBottom: 9,
    marginTop: 15,
    width: Dimensions.get('window').width + 8.8

  },
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',

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
    elevation: 6,
    // marginTop: 6

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
  toggleStatus: {
    marginLeft: 13,
    marginTop: -33,
    transform: [{
      scaleX: moderateScale(0.7, 0.1)
    }, {
      scaleY: moderateScale(0.7, 0.2)
    }]
  },
  toggleStatusText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    marginLeft: -99
  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    right: 136
  },
  toggle: {
    margin: 5,
    left: 79,
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
    bottom: 17.6,
    left: 108
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
    marginLeft: 161,
    marginBottom: -7
  }

});

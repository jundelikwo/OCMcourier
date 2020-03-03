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
// import BottomNavigator from '../navigate/bottom'
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
    width: 50 / 2,
    height: 50 / 2
  }} source={require('../assets/loginVector.png')} />
);
let red = "DB463B";
let green = "5AC966"

//icons
// const Imager = React.createElement(Image, {
//   source: require('../assets/pending.png')
// });
const pendingIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/pending.png')} />
);
const historyIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/history.png')} />
);
const activeIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/active.png')} />
);
const mapIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/map.png')} />
);
const accountIcon = (style) => (
  <Image style={{
    width: 25,
    height: 25
  }} source={require('../assets/account.png')} />
);

export const PendingScreen = ({ navigation }) => {
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
  const navigateAccount = () => {
    navigation.navigate('Account');
  };
  const navigateActive = () => {
    navigation.navigate('Active');
  };
  const navigateDir = () => {
    navigation.navigate('Direction');
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

      <TopNavigation title='Pending Orders' style={styles.topNavigation}
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
              <Text style={styles.timeToKilo}>20mins<Text style={styles.dot}> .</Text> 2.6km</Text>
              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processing</Text>
              <Icon
                name='droplet'
                width={12}
                height={12}
                fill='#DB463B'
                style={styles.statusIcon}
              />
            </View>
            <View style={{ flex: 1, }}>
              <Text style={styles.time}>2 mins ago</Text>
              <Toggle
                style={styles.toggleStatus}
                onChange={onCheckedChangeOrder}
                textStyle={styles.toggleStatusText}
                checked={active}
                text={'Status'}
              />
            </View>
          </View>
        </View>
      </Card>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: Dimensions.get('window').height - 155 }}>
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
          <Icon
            name='droplet'
            width={12}
            height={12}
            fill='#DB463B'
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
      <BottomNavigation
        selectedIndex={selectedIndex}
        // appearance='noIndicator'
        style={{
          // marginBottom: '-14%',
          // position: 'absolute',
          // marginTop: 50,
          // backgroundColor: 'red'

        }}
        onSelect={setSelectedIndex}>
        <BottomNavigationTab title='Pending' icon={pendingIcon} titleStyle={{ color: '#FD901C' }} />
        <BottomNavigationTab title='History' icon={historyIcon} onPressIn={navigateHistory} titleStyle={{ color: '#8B95A6' }} />
        <BottomNavigationTab title='Active' icon={activeIcon} onPressIn={navigateActive} titleStyle={{ color: '#8B95A6' }} />
        <BottomNavigationTab title='Direction' icon={mapIcon} onPressIn={navigateDir} titleStyle={{ color: '#8B95A6' }} />
        <BottomNavigationTab title='Account' icon={accountIcon} onPressIn={navigateAccount} titleStyle={{ color: '#8B95A6' }} />
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
    // right: 9,
    marginBottom: 9,
    marginTop: 15,
    width: Dimensions.get('window').width + 8.8,
    flex: 1,
    flexDirection: 'row'
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
    right: 50,
    position: 'absolute',
    top: 3
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
    left: 119
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

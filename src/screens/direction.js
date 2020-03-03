import React, { Component, useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity
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

export const DirectionScreen = ({ navigation }) => {
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
  const navigatePending = () => {
    navigation.navigate('Pending');
  };
  const navigatePassword = () => {
    navigation.navigate('Password');
  };
  const navigateProfile = () => {
    navigation.navigate('Profile');
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
    <View style={{ backgroundColor: '#f2f3f4', }}>

      <TopNavigation title='Get Direction' style={styles.topNavigation}
        titleStyle={styles.title} leftControl={BackAction()} rightControls={availableToggle()} />
      <Divider />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: Dimensions.get('window').height - 60 }}>

      </ScrollView>
      <BottomNavigation
        selectedIndex={selectedIndex}
        appearance='noIndicator'
        style={{
          // marginBottom: '-14%',
          // position: 'absolute',
          // marginTop: 50,

        }}
        onSelect={setSelectedIndex}>
        <BottomNavigationTab title='Pending' onPressIn={navigatePending} titleStyle={{ color: '#FD901C' }} />
        <BottomNavigationTab title='History' onPressIn={navigateHistory} titleStyle={{ color: '#FD901C' }} />
        <BottomNavigationTab title='Active' titleStyle={{ color: '#FD901C' }} />
        <BottomNavigationTab title='Direction' titleStyle={{ color: '#FD901C' }} />
        <BottomNavigationTab title='Account' />
      </BottomNavigation>

    </View >

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
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.49,
    elevation: 2,
    marginTop: 9

  },
  orderHead: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    // paddingVertical: 32,
    // backgroundColor: 'green'
  },
  avatar: {
    flex: 1,
    alignItems: 'flex-start'
  },
  orderHeadContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',

  },
  clientName: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#515C6F',
    // fontWeight: 'bold',
    marginVertical: 2,
    alignSelf: 'flex-start'

    // justifyContent: 'space-between'
  },
  dot: {
    fontSize: 30,
    color: '#747D8C',
  },
  stops: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    // marginTop: -2,
    marginVertical: 2
  },
  stopsCountNum: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    marginTop: -2,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 10,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#747D8C',
    fontSize: 10,
    // marginLeft: 9,
    // justifyContent: 'flex-start'
    // alignContent: 'center'
    // top: 12
    // marginBottom: 40
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
    bottom: 19.5,
    left: 117
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

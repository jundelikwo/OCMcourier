import React, { Component, useState } from 'react'
import {
  Image,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Layout, Text, Avatar, TopNavigationAction, TopNavigation, Divider, Toggle, Card } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);


export const PendingScreen = ({ navigation }) => {
  //driver status
  const [available, setAvailable] = useState({
    checked: false,
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
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );



  const availableToggle = () => (
    <Toggle
      style={styles.toggle}
      text={available.text}
      textStyle={styles.toggleText}
      onChange={onCheckedChangeCourier}
      checked={checked}
      size="tiny"
    // onPress={this.ToggleAvailability}
    />
  );

  return (
    <SafeAreaView style={styles.body}>
      <TopNavigation title='Pending Orders' style={styles.topNavigation} titleStyle={styles.title} rightControls={availableToggle()} leftControl={BackAction()} />
      <Divider />
      {/* style={styles.head} */}
      <Card >
        <Avatar style={styles.avatar} size='large' source={require('../assets/person.png')} />
        <Text style={styles.clientName}> Brown Samson Dappa</Text>
        <Text style={styles.timeStamp}>2 mins ago</Text>
        <Text style={styles.kiloTime}>20mins <Text style={styles.dot}>.</Text>2.6km</Text>
        <Text style={styles.stops}>Stops:<Text style={styles.stopsCount}>3 <Text style={styles.dot}>.</Text></Text>Processed  </Text>
        <Toggle
          style={styles.toggleOrder}
          text={order.status}
          textStyle={styles.toggleText}
          onChange={onCheckedChangeOrder}
          checked={active}
          size="tiny"
        // onPress={this.ToggleAvailability}
        />
      </Card>
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  topNavigation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    top: 16,
    right: 9,
    marginBottom: 9,
    marginTop: 15,

  },
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',
    // top:
  },
  toggle: {
    margin: 8,
    // left: 70
  },
  toggleText: {
    fontSize: 12,
    fontFamily: 'Muli',
    // alignSelf: 'center',
    color: '#828282',
    fontWeight: 'bold',
    // right: 120
  },
  clientName: {
    fontSize: 16,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',
    right: 30,
    bottom: 52
  },
  avatar: {
    right: 10
  },
  timeStamp: {
    fontSize: 10,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#747D8C',
    bottom: 70,
    left: 140
  },
  kiloTime: {
    fontSize: 12,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#747D8C',
    fontWeight: 'bold',
    right: 62,
    bottom: 70
  },
  dot: {
    fontSize: 40,
    // bottom: 2
    // position: "absolute",
    // top: 10
    // margin: 2
  },
  stops: {
    fontSize: 12,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#747D8C',
    right: 47,
    bottom: 74
    // fontWeight: 'bold',
  },
  stopsCount: {
    fontSize: 12,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#747D8C',
    fontWeight: 'bold',
  },
  head: {
    height: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,

  },
  toggleOrder: {
    // backgroundColor: '#eeeff1'
    bottom: 110,
    left: 100
  }
});

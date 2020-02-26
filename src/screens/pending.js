import React, { Component, useState } from 'react'
import {
  Image,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-navigation';
import { Icon, Layout, Text, Avatar, TopNavigationAction, TopNavigation, Divider, Toggle, Card, Button, CardHeader } from '@ui-kitten/components';
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
      text={'Availablity'}
      textStyle={styles.toggleText}
      onChange={onCheckedChangeCourier}
      checked={checked}
    // onPress={this.ToggleAvailability}
    />
  );


  const Header = () => (
    <CardHeader
      title='Maldives'
      description='By Wikipedia'
      description='By Wikipedi'
    />
  );


  return (
    <View >

      <TopNavigation title='Pending Orders' style={styles.topNavigation}
        titleStyle={styles.title} rightControls={availableToggle()} leftControl={BackAction()} />
      <Divider />
      <Card style={{
        margin: 0, padding: 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 2.49,

        elevation: 6,
      }}>
        <View style={{
          flex: 1, flexDirection: 'row', alignItems: "center", paddingVertical: 32,

        }}>
          <View style={{ flex: 1, alignItems: 'flex-start' }} >
            <Avatar style={{}} size='large' source={require('../assets/person.png')} />
          </View>
          <View style={{ flex: 4, flexDirection: "row", alignItems: 'center' }}>
            <View style={{ flex: 2, }}>
              <Text style={{
                fontSize: 16,
                fontFamily: 'Muli',
                color: '#FD901C',
                fontWeight: 'bold',
              }}>Brown Samson Dappa</Text>

              <Text style={{
                fontSize: 12,
                fontFamily: 'Muli',
                color: '#747D8C',
                fontWeight: 'bold',
                marginTop: 2
              }}>20mins <Text style={{ fontSize: 30, }}>.</Text>2.6km</Text>
              <Text style={{
                fontSize: 12,
                fontFamily: 'Muli',
                color: '#747D8C',
                marginTop: -2
              }}>Stops: <Text style={{
                fontSize: 12,
                fontFamily: 'Muli',
                color: '#747D8C',
                fontWeight: 'bold',
              }}>3 <Text style={{ fontSize: 30, }}>.</Text></Text>Processing  </Text>
            </View>

            <View style={{
              flex: 1
            }} >


              <Text style={{ fontSize: 10, marginLeft: 33, marginBottom: 40 }} >2 mins ago</Text>
              {/* <Text style={{ fontSize: 10 }} >2 mins ago</Text> */}
              <Toggle
                style={{ marginLeft: 10, marginTop: -33, transform: [{ scaleX: moderateScale(0.7, 0.1) }, { scaleY: moderateScale(0.7, 0.2) }] }}
                onChange={onCheckedChangeOrder}
                textStyle={styles.toggleTextOrder}
                checked={active}
                text={'Status'}

              // onPress={this.ToggleAvailability}
              />

            </View>
          </View>

        </View>
      </Card>

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
  toggleTextOrder: {
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
    left: 90,
    transform: [{ scaleX: moderateScale(0.8, 0.1) }, { scaleY: moderateScale(0.8, 0.2) }]
  },

});

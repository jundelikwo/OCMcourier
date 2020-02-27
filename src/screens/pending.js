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
let red = "DB463B";
let green = "5AC966"

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
      title='Stop 1'
      description='By Wikipedia'
      description='By Wikipedi'
    />
  );


  return (
    <View style={{ backgroundColor: '#f2f3f4' }}>

      <TopNavigation title='Pending Orders' style={styles.topNavigation}
        titleStyle={styles.title} rightControls={availableToggle()} leftControl={BackAction()} />
      <Divider />

      <Card style={styles.orderHeadCard}>
        <View style={styles.orderHead}>
          <View style={styles.avatar} >
            <Avatar style={{}} size='large' source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2 }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>
              <Text style={styles.timeToKilo}>20mins <Text style={styles.dot}>.</Text>2.6km</Text>
              <Text style={styles.stops}>Stops: <Text style={styles.stopsCount}>3 <Text style={styles.dot}>.</Text></Text>Processing</Text>
              <Icon
                name='droplet'
                width={12}
                height={12}
                fill='#DB463B'
                style={{
                  bottom: 16.6,
                  left: 116
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
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
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Card style={styles.card} >
          <Text>
            Stop 1
          </Text>
          <Text>
            Crunchies Restaurant
          </Text>
          <Text>
            The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
            </Text>
        </Card>

        <Card style={styles.card} header={Header} >
          <Text>
            The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
            </Text>
        </Card>
        <Card style={styles.card} header={Header} >
          <Text>
            The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
            </Text>
        </Card>
        <Card style={styles.card} header={Header} >
          <Text>
            The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
            </Text>
        </Card>
        <Card style={styles.card} header={Header} >
          <Text>
            The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
            </Text>
        </Card>
      </ScrollView>


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
  },
  stops: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    marginTop: -2,
  },
  stopsCount: {
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
    right: 136
  },
  toggle: {
    margin: 5,
    left: 90,
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
    shadowRadius: 10,

    elevation: 0,
  },

});

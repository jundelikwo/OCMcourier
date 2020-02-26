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
      // text={available.text}
      text={'Availablity'}
      textStyle={styles.toggleText}
      onChange={onCheckedChangeCourier}
      checked={checked}
      size="tiny"
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
    <SafeAreaView >

      <TopNavigation title='Pending Orders' style={styles.topNavigation}
        titleStyle={styles.title} rightControls={availableToggle()} leftControl={BackAction()} />
      <Divider />
      <Card style={styles.head}>
        <Layout style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
          <View style={{ flex: 1, justifyContent: 'center', marginTop: 22 }}>
            <Avatar style={styles.avatar} size='large' source={require('../assets/person.png')} />
          </View>

          <Layout style={{ flex: 5 }}>
            <Text style={styles.clientName}> Brown Samson Dappa</Text>

            <Text style={styles.kiloTime}>20mins <Text style={styles.dot}>.</Text>2.6km</Text>
            <Text style={styles.stops}>Stops: <Text style={styles.stopsCount}
            >3 <Text style={styles.dot}>.</Text></Text>Processing  </Text>

            <Button appearance='ghost' status='basic' size='small' disabled icon={Droplet}
              style={{
                backgroundColor: 'transparent',
                // position: 'relative',
                // bottom: 108,
                // left: 19
              }}
            ></Button>


          </Layout>
          <Layout style={{ flex: 1, flexDirection: 'column' }}>


            {/* <View style={{ flex: 5 }}>
              <Toggle
                style={styles.toggleOrder}
                // text={order.status}
                text={'Status'}
                textStyle={styles.toggleTextOrder}
                onChange={onCheckedChangeOrder}
                checked={active}
                size="tiny"
              // onPress={this.ToggleAvailability}
              />

            </View> */}
            <View style={{ flex: 1, marginBottom: 5 }}>
              <Text style={styles.timeStamp}>2 mins ago</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.timeStamp}>2 mins ago</Text>
            </View>

          </Layout>

        </Layout>
      </Card>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
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
        <Card style={styles.card} header={Header} >
          <Text>
            The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
            </Text>
        </Card>
      </ScrollView>




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
    left: 90
  },
  toggleText: {
    fontSize: 12,
    fontFamily: 'Muli',
    // alignSelf: 'center',
    color: '#828282',
    fontWeight: 'bold',
    right: 129
  },
  clientName: {
    fontSize: 16,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',
    // right: 30,
    // bottom: 52,
    // margin: 3
  },
  avatar: {
    // right: 10
  },
  timeStamp: {
    fontSize: 10,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#747D8C',
    // bottom: 72,
    // left: 140,

  },
  kiloTime: {
    fontSize: 12,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#747D8C',
    fontWeight: 'bold',
    // right: 62,
    // bottom: 70,
    // margin: 3

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
    // right: 47,
    // bottom: 74,
    // margin: 3
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
    // height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 2.49,

    elevation: 6,

    // flex: 1,
    // flexDirection: 'row',
    // // marginTop: 120
    paddingBottom: 45,

  },
  toggleOrder: {
    // backgroundColor: '#eeeff1'

    // bottom: 142,
    // left: 170
  },
  toggleTextOrder: {
    fontSize: 12,
    fontFamily: 'Muli',
    // alignSelf: 'center',
    color: '#828282',
    fontWeight: 'bold',
    // marginRight: -12
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
  bg: {
    backgroundColor: '#f2f3f4',
    flex: 1
  }
});

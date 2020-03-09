import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  Text, TopNavigationAction,
  TopNavigation, Divider, Toggle, Card,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
//  icons
const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);



export const AccountScreen = ({ navigation }) => {
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



  //nav
  const navigateBack = () => {
    navigation.goBack();
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

  const availableToggle = () => (
    <Toggle
      style={styles.toggle}
      text={available.text}
      text={'Availablity'}
      textStyle={styles.toggleText}
      onChange={onCheckedChangeCourier}
      checked={checked}
    />
  );

  return (
    <View style={{ backgroundColor: '#f2f3f4', }}>

      <TopNavigation title='Account Settings' style={styles.topNavigation}
        titleStyle={styles.title} rightControls={availableToggle()} />
      <Divider />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: Dimensions.get('window').height - 60 }}>
        <View style={{ marginTop: 5 }}>
          <Card style={styles.orderHeadCard}>
            <TouchableOpacity style={styles.orderHead} onPressIn={navigatePassword}>

              <View style={styles.orderHeadContent}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={styles.clientName}>Change Password </Text>

                </View>
                <View style={{ flex: 1, }}>
                  <Icon
                    name='chevron-right'
                    width={40}
                    height={40}
                    fill='#747D8C'
                    style={{ alignSelf: 'flex-end' }}
                  />

                </View>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style={styles.orderHeadCard}>
            <TouchableOpacity style={styles.orderHead} onPressIn={navigateProfile}>

              <View style={styles.orderHeadContent}>
                <View style={{ flex: 1, }}>
                  <Text style={styles.clientName}>Personal Settings </Text>

                </View>
                <View style={{ flex: 1, }}>
                  <Icon
                    name='chevron-right'
                    width={40}
                    height={40}
                    fill='#747D8C'
                    style={{ alignSelf: 'flex-end' }}
                  />

                </View>
              </View>
            </TouchableOpacity>
          </Card>

        </View>
      </ScrollView>

    </View >

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
    // paddingTop: StatusBar.currentHeight / 1.5,
    // right: 9,
    // marginBottom: 10,
    paddingVertical: 5,
    // marginTop: 22,
    width: Dimensions.get('window').width + 8.8,
    flex: 1,
    flexDirection: 'row',


  },
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',
    marginLeft: 18

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
    elevation: 0,
    marginVertical: 5

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

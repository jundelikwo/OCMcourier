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
  Icon, Avatar, Text, Input, TopNavigationAction,
  TopNavigation, Divider, Toggle, Card, Modal, Layout,
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

export const ProfileScreen = ({ navigation }) => {
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

  const [Namevalue, setValueName] = React.useState('');
  const [Emailvalue, setValueEmail] = React.useState('');
  const [Mobilevalue, setValueMobile] = React.useState('');


  //nav
  const navigateBack = () => {
    navigation.goBack();
  };
  const navigatePending = () => {
    navigation.navigate('Pending');
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
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };
  const renderModalElement = () => (
    <Layout
      style={styles.modalContainer}>
      <Image style={{
        width: 50,
        height: 50,
        // marginTop: 50
      }} source={require('../assets/success.png')} />
      <Text style={{
        fontSize: 18,
        fontFamily: 'Muli',
        alignSelf: 'center',
        color: '#FD901C',
        fontWeight: 'bold',
        lineHeight: 23,
        textAlign: 'center',
        margin: 20
      }}>Password Changed Successfully</Text>
      <TouchableOpacity style={{ width: Dimensions.get('window').width - 90, backgroundColor: '#FD901C', padding: 14, }} onPress={toggleModal}>

        <Text style={{
          fontSize: 18,
          fontFamily: 'Muli',
          alignSelf: 'center',
          color: '#fff',
          fontWeight: 'bold',
          lineHeight: 23,
          textAlign: 'center',

        }}>
          Back
          </Text>
      </TouchableOpacity>
    </Layout>
  );

  return (
    <View style={{}}>

      <TopNavigation title='Personal Settings' style={styles.topNavigation}
        titleStyle={styles.title} leftControl={BackAction()} rightControls={availableToggle()} />
      <Divider />
      <View style={{ height: Dimensions.get('window').height - 90, flexDirection: 'column' }}>
        <View style={{ backgroundColor: '#FD901C', flex: 0.5, }}>
          <View style={{
            backgroundColor: '#FD901C', paddingTop: 100, shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }} >
            <Avatar style={{
              transform: [{
                scaleX: moderateScale(2, 0.1)
              }, {
                scaleY: moderateScale(2, 0.2)
              }],
              // justifyContent: 'flex-start',
              alignSelf: 'center',


              // height: 90

            }} size='giant' source={require('../assets/pic.png')} />
          </View>
        </View>


        <View style={{ flex: 1.5, paddingTop: 100 }}>
          <Input
            value={Namevalue}
            placeholder='Brown Samson Dappa'
            style={styles.inputEmail}
            textStyle={styles.inputText}
            labelStyle={styles.inputLabel}
            captionTextStyle={styles.inputCaption}
            onChangeText={setValueName}
            textStyle={styles.placeholder}
            placeholderTextColor={'#515C6F'}

          />
          <Input
            value={Emailvalue}
            placeholder='samsondappa@gmail.com'
            style={styles.inputPass}
            textStyle={styles.inputText}
            labelStyle={styles.inputLabel}
            captionTextStyle={styles.inputCaption}
            onChangeText={setValueEmail}
            textStyle={styles.placeholder}
            placeholderTextColor={'#515C6F'}


          />
          <Input
            value={Mobilevalue}
            placeholder='+234 817 496 9237'
            style={styles.inputPass}
            textStyle={styles.inputText}
            labelStyle={styles.inputLabel}
            captionTextStyle={styles.inputCaption}
            onChangeText={setValueMobile}
            textStyle={styles.placeholder}
            placeholderTextColor={'#515C6F'}

          />
          <Layout style={styles.container}>

            <Modal visible={visible}
              animationType="slide"
              transparent={true}>
              {renderModalElement()}
            </Modal>
          </Layout>
          <TouchableOpacity onPress={toggleModal} style={styles.button} ><Text style={styles.buttonText}>Update</Text></TouchableOpacity>
        </View>

      </View>

      {/* <BottomNavigation
        selectedIndex={selectedIndex}
        appearance='noIndicator'
        style={{
          // marginBottom: '-14%',
          // position: 'absolute',
          // marginTop: 50,
          // backgroundColor: 'red'

        }}
        onSelect={setSelectedIndex}>
        <BottomNavigationTab title='Pending' icon={pendingIcon} onPressIn={navigatePending} titleStyle={{ color: '#8B95A6' }} />
        <BottomNavigationTab title='History' icon={historyIcon} onPressIn={navigateHistory} titleStyle={{ color: '#8B95A6' }} />
        <BottomNavigationTab title='Active' icon={activeIcon} onPressIn={navigateActive} titleStyle={{ color: '#8B95A6' }} />
        <BottomNavigationTab title='Direction' icon={mapIcon} onPressIn={navigateDir} titleStyle={{ color: '#8B95A6' }} />
        <BottomNavigationTab title='Account' icon={accountIcon} onPressIn={navigateAccount} titleStyle={{ color: '#FD901C' }} />
      </BottomNavigation> */}

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
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 90,
    padding: 16,
    height: 300,
    // backgroundColor: 'red'
    opacity: 0.9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 3,
    flexDirection: 'column',
    flex: 1,
    borderRadius: 16
  },
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',

  },

  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#BDBDBD',
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
  inputEmail: {
    borderRadius: 7,
    // borderColor: 'blue',
    margin: 10,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 20,
    alignSelf: "center",
    // height: 50
    // borderWidth: 2
  },
  inputPass: {
    borderRadius: 7,
    borderColor: 'black',
    margin: 10,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 20,
    alignSelf: "center"
  },
  placeholder: {
    fontSize: 18,
    fontFamily: 'Muli',
    margin: 4
  },
  button: {
    backgroundColor: '#FD901C',
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    // bottom: 15,
    borderRadius: 7,
    padding: 12,
    marginTop: 90
    // top: Dimensions.get('window').height - 420

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
});

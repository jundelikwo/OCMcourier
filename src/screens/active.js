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
  Icon, Layout, Text, Input, TopNavigationAction,
  TopNavigation, Divider, Toggle, Card, Button, CardHeader,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';
import StepIndicator from 'react-native-step-indicator';
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


export const ActiveScreen = ({ navigation }) => {
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

  const [Oldvalue, setValueOld] = React.useState('');
  const [Newvalue, setValueNew] = React.useState('');
  const [Confrimvalue, setValueConfrim] = React.useState('');


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
  const labels = ["Crunchies Restaurant", "The Spot", "Order Summary", "Pepper Roni", "Buyer"];
  const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: '#FD901C',
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: '#FD901C',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#FD901C',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#FD901C',
    stepIndicatorUnFinishedColor: '#C1C1C1',
    stepIndicatorCurrentColor: '#FD901C',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fff',
    stepIndicatorLabelFinishedColor: '#C1C1C1',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#515C6F',
    labelSize: 5,
    currentStepLabelColor: '#FD901C',
  }

  // constructor() {
  //   this.state = {
  //     currentPosition: 0
  //   }
  // }
  // onPageChange(position){
  //   this.setState({ currentPosition: position });

  // }

  const [currentPosition, currentPositionValue] = React.useState(0);


  const onChangeCurrentPosition = (newPosition) => {
    // console.warn("newPosition", newPosition)
    currentPositionValue(newPosition)
  };



  return (
    <View style={{}}>

      <TopNavigation title='Active Order' style={styles.topNavigation}
        titleStyle={styles.title} leftControl={BackAction()} rightControls={availableToggle()} />
      <Divider />
      <View style={{ height: Dimensions.get('window').height - 100, width: Dimensions.get('window').width + 50, alignItems: 'center' }}>
        <StepIndicator
          customStyles={customStyles}
          direction='vertical'
          currentPosition={currentPosition}
          labels={labels}
          stepCount={4}
          onPress={onChangeCurrentPosition}
        // style={{ alignItems: 'center' }}
        />
      </View>

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
    top: Dimensions.get('window').height - 420

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
});
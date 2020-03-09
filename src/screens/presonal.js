import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import {
  Avatar, Text, Input, TopNavigationAction,
  TopNavigation, Divider, Toggle, Modal, Layout,

} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
//  icons
const BackIcon = (style) => (
  <Icon style={[{ color: '#515C6F' }]} name='ios-arrow-back' size={25} />
);


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

  const [Namevalue, setValueName] = React.useState('');
  const [Emailvalue, setValueEmail] = React.useState('');
  const [Mobilevalue, setValueMobile] = React.useState('');


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
      }}>Account Settings Updated</Text>
      <TouchableOpacity style={{ width: Dimensions.get('window').width - 130, borderRadius: 7, backgroundColor: '#FD901C', padding: 14, alignSelf: 'center', marginTop: 40 }} onPress={toggleModal}>

        <Text style={{
          fontSize: 18,
          fontFamily: 'Muli',
          alignSelf: 'center',
          color: '#fff',
          fontWeight: 'bold',
          lineHeight: 23,
          textAlign: 'center',

        }}>
          Cancel
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
              borderColor: '#fff',
              borderWidth: 0.5


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
  inputEmail: {
    borderRadius: 7,
    // borderColor: 'blue',
    margin: 10,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 30,
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
    width: Dimensions.get('window').width - 30,
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
    marginVertical: 90
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

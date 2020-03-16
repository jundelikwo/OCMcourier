import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  Avatar, Text, Input, TopNavigationAction,
  TopNavigation, Divider, Modal, Layout
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
//  icons
const BackIcon = (style) => (
  <Icon style={[{ color: '#515C6F' }]} name='ios-arrow-back' size={25} />
);

export const ProfileScreen = ({ navigation }) => {
  //driver status
  const [available, setAvailable] = useState({
    checked: true,
    text: "Available"
  });
  const { checked, text } = available;
  const onCheckedChangeCourier = (isChecked) => {
    setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
  };
  const [Namevalue, setValueName] = React.useState('');
  const [Emailvalue, setValueEmail] = React.useState('');
  const [Mobilevalue, setValueMobile] = React.useState('');


  //nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    })
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const availableToggle = () => (
    <View style={{ marginRight: 18 }}>
      <ToggleSwitch
        isOn={checked}
        onColor='#FD901C'
        offColor="#747D8C"
        label={available.text}
        labelStyle={styles.toggleText}
        size='meduim'
        onToggle={onCheckedChangeCourier}
      />
    </View>
  );
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => {
    requestAnimationFrame(() => {
      setVisible(!visible)
    })
  };
  const renderModalElement = () => (
    <Layout
      style={styles.modalContainer}>
      <Image style={{
        width: 50,
        height: 50,
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
    <View style={{ flex: 1 }}>
      <TopNavigation title='Personal Settings' style={styles.topNavigation}
        titleStyle={styles.title} leftControl={BackAction()} rightControls={availableToggle()} />
      <Divider />
      <View style={{ flex: 1, flexDirection: 'column' }}>
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
                scaleX: moderateScale(2, 5)
              }, {
                scaleY: moderateScale(2, 5)
              }],
              alignSelf: 'center',
              borderColor: '#fff',
              // borderWidth: 0.1
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
    paddingVertical: 5,
    width: Dimensions.get('window').width + 8.8,
    flexDirection: 'row',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 90,
    padding: 16,
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
    margin: 10,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 30,
    alignSelf: "center",
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
    borderRadius: 7,
    padding: 12,
    marginVertical: 90
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
});

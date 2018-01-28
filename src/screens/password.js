import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Layout, Text, Input, TopNavigationAction,
  TopNavigation, Divider, Modal,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
//  icons
const BackIcon = (style) => (
  <Icon style={[{ color: '#515C6F' }]} name='ios-arrow-back' size={25} />
);

export const PasswordScreen = ({ navigation }) => {
  //driver status
  const [available, setAvailable] = useState({
    checked: true,
    text: "Available"
  });
  const { checked, text } = available;
  const onCheckedChangeCourier = (isChecked) => {
    setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
  };
  const [Oldvalue, setValueOld] = React.useState('');
  const [Newvalue, setValueNew] = React.useState('');
  const [Confrimvalue, setValueConfrim] = React.useState('');
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
      }}>Password Changed Successfully</Text>
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

  return (
    <View style={{flex: 1}}>
      <TopNavigation title='Change Password' style={styles.topNavigation}
        titleStyle={styles.title} leftControl={BackAction()} rightControls={availableToggle()} />
      <Divider />
      <View style={{flex: 1}}>
        <View style={{ marginTop: 30 }}>
          <Input
            value={Oldvalue}
            placeholder='Old Password'
            style={styles.inputEmail}
            textStyle={styles.inputText}
            labelStyle={styles.inputLabel}
            captionTextStyle={styles.inputCaption}
            onChangeText={setValueOld}
            secureTextEntry={true}
            textStyle={styles.placeholder}
            placeholderTextColor={'#BDBDBD'}
          />
          <Input
            value={Newvalue}
            placeholder='New Password'
            style={styles.inputPass}
            textStyle={styles.inputText}
            labelStyle={styles.inputLabel}
            captionTextStyle={styles.inputCaption}
            onChangeText={setValueNew}
            secureTextEntry={true}
            textStyle={styles.placeholder}
            placeholderTextColor={'#BDBDBD'}
          />
          <Input
            value={Confrimvalue}
            placeholder='Confirm Password'
            style={styles.inputPass}
            textStyle={styles.inputText}
            labelStyle={styles.inputLabel}
            captionTextStyle={styles.inputCaption}
            onChangeText={setValueConfrim}
            secureTextEntry={true}
            textStyle={styles.placeholder}
            placeholderTextColor={'#BDBDBD'}
          />
        </View>
        <Layout style={styles.container}>
          <Modal visible={visible}
            animationType="slide"
            transparent={true}>
            {renderModalElement()}
          </Modal>
        </Layout>
        <TouchableOpacity onPress={toggleModal} style={styles.button} ><Text style={styles.buttonText}>Change Password</Text></TouchableOpacity>
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
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 90,
    padding: 16,
    height: 300,
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
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    right: 50,
    position: 'absolute',
  },
  inputEmail: {
    margin: 10,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 20,
    alignSelf: "center",
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

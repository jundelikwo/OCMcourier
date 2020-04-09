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
  Divider, Modal,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import TopNav from '../components/topNav';

export const PasswordScreen = ({ navigation }) => {

  //nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    })
  };
  const BackIcon = () => (
    <Icon style={[{ color: '#515C6F', marginRight: -29, }]} name='ios-arrow-back' size={25} />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} style={[{ padding: 5 }]} />
  );

  const [Oldvalue, setValueOld] = useState('');
  const [Newvalue, setValueNew] = useState('');
  const [Confrimvalue, setValueConfrim] = useState('');
  const [visible, setVisible] = useState(false);
  const toggleModalBack = () => {
    requestAnimationFrame(() => {
      setVisible(!visible);
    })
  };
  const toggleModal = () => {
    requestAnimationFrame(() => {
      setVisible(!visible)
    })
  };

  const renderModalElement = () => (
    <View style={{}}>
      <Layout style={{
        flex: 1, flexDirection: 'column', height: 290, width: Dimensions.get('window').width - 60, borderRadius: 16, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 3,
      }}>
        <TouchableOpacity style={{ backgroundColor: 'white', flex: 0.6, borderRadius: 16, alignSelf: 'flex-start', width: Dimensions.get('window').width - 60, flexDirection: 'row', justifyContent: 'flex-end' }} onPress={toggleModal}>
          <Image style={{
            width: 20,
            height: 20,
            margin: 20
          }} source={require('../assets/x.png')} />
        </TouchableOpacity>
        <View style={{ backgroundColor: 'white', flex: 0.6, alignSelf: 'flex-start', width: Dimensions.get('window').width - 60, flexDirection: 'row', justifyContent: 'center' }}>
          <Image style={{
            width: 65,
            height: 65,
            alignSelf: 'center'
          }} source={require('../assets/success.png')} />
        </View>
        <View style={{ backgroundColor: 'white', flex: 1.5, alignSelf: 'center', width: Dimensions.get('window').width - 60, justifyContent: 'center', margin: 10 }}>
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
        </View>
        <TouchableOpacity style={{ backgroundColor: '#FD901C', flex: 0.7, alignSelf: 'flex-end', width: Dimensions.get('window').width - 60, justifyContent: 'center', borderBottomRightRadius: 16, borderBottomLeftRadius: 16 }}
          onPress={navigateBack}>
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
      </Layout >
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <TopNav title='Change Password' leftControl={BackAction()} />
      <Divider />
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 30, }}>
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
            onBackdropPress={toggleModalBack}
            backdropStyle={styles.backdrop}
            transparent={false}>
            {renderModalElement()}
          </Modal>
        </Layout>
        <TouchableOpacity onPress={toggleModal} style={styles.button}>
          <Text style={styles.buttonText}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  )
};

const styles = StyleSheet.create({
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
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  inputEmail: {
    margin: 10,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 40,
    alignSelf: "center",
  },
  inputPass: {
    borderRadius: 7,
    borderColor: 'black',
    margin: 10,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 40,
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
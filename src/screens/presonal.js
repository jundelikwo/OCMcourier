import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  Avatar, Text, Input, TopNavigationAction,
  Divider, Modal, Layout
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import TopNav from '../components/topNav';
import ImagePicker from 'react-native-image-picker';



export const ProfileScreen = ({ navigation }) => {


  const [order, setOrder] = useState({
    filePath: null,

  });
  // // const { filePath, status } = order;
  const onChangeFilePath = (isChecked) => {
    // console.warn("isChecked", isChecked)
    setOrder({ filePath: isChecked })
    console.warn("hi");

  };




  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
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

  const BackIcon = () => (
    <Icon style={[{ color: '#515C6F', marginRight: -29, }]} name='ios-arrow-back' size={25} />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} style={[{}]} />
  );
  const [visible, setVisible] = React.useState(false);
  const toggleModalBack = () => {
    setVisible(!visible);
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
          }}>Account Settings Updated</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#FD901C', flex: 0.7, alignSelf: 'flex-end', width: Dimensions.get('window').width - 60, justifyContent: 'center', borderBottomRightRadius: 16, borderBottomLeftRadius: 16 }} onPress={toggleModal}>
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
      <TopNav title='Personal Settings' leftControl={BackAction()} />
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
            <Avatar onPress={onChangeFilePath} style={{
              transform: [{
                scaleX: moderateScale(3, 0)
              }, {
                scaleY: moderateScale(3, 0)
              }],
              alignSelf: 'center',
              borderColor: '#fff',
              // borderWidth: 0.1
              // backgroundColor: 'red',
              // flex: 1
            }} size='giant' source={require('../assets/pic.png')} />
            {/* <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'green' }} onPress={onChangeFilePath}></TouchableOpacity> */}



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
              onBackdropPress={toggleModalBack}
              backdropStyle={styles.backdrop}
              transparent={false}>
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

  modalContainer: {
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
    borderRadius: 16,

  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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

import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert
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

  const [photo, setPhoto] = useState('https://res.cloudinary.com/ogcodes/image/upload/v1585058144/pic.png');
  const [Namevalue, setValueName] = useState('');
  const [Emailvalue, setValueEmail] = useState('');
  const [Mobilevalue, setValueMobile] = useState('');
  const selectPhotoTapped = () => {

    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64, ' + response.data };
        const source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        }
        handleUpload(source)
      }
    });
  }
  const handleUpload = (photo) => {
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', 'i4hpnx9j')
    data.append("cloud_name", "ogcodes")
    fetch("https://api.cloudinary.com/v1_1/ogcodes/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        setPhoto(data.secure_url)
      }).catch(err => {
        Alert.alert("An Error Occured While Uploading")
      })
  }

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
          }}>Account Settings Updated</Text>
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
      <TopNav title='Personal Settings' leftControl={BackAction()} />
      <Divider />
      <View style={{ flex: 1, }}>
        <View style={{
          backgroundColor: '#FD901C',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          alignSelf: 'flex-start', flex: 0.5, flexDirection: 'row', justifyContent: 'center', width: Dimensions.get('window').width,
        }}>
          <View style={{
            backgroundColor: '#FD901C',
            justifyContent: 'flex-end',
          }} >
            <TouchableOpacity style={{ top: 10 }} onPress={selectPhotoTapped}>
              <Avatar style={{
                transform: [{
                  scaleX: moderateScale(3, 0)
                }, {
                  scaleY: moderateScale(3, 0)
                }],
                borderColor: '#fff',
              }} size='giant' source={{ uri: photo }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1.5, paddingTop: 80 }}>
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
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  inputEmail: {
    borderRadius: 7,
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
    width: Dimensions.get('window').width - 40,
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

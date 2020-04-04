import React, { useState } from 'react'
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {
  Layout, Modal,
} from '@ui-kitten/components';

import LeftBox from './leftBox';
import RightBox from './rightBox';
import ModalStatus from './modalStatus';


export default StepIndicator = ({ order, index, navigation }) => {
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    })
  };
  const navigateDirection = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Direction');
    })
  };
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

          <ModalStatus />

        </View>
        <TouchableOpacity style={{ backgroundColor: '#FD901C', flex: 0.7, alignSelf: 'flex-end', width: Dimensions.get('window').width - 60, justifyContent: 'center', borderBottomRightRadius: 16, borderBottomLeftRadius: 16 }}
          onPress={navigateDirection} >
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

    <View key={index} style={{ height: 200, width: Dimensions.get('window').width - 40, alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>

      <TouchableOpacity style={{
        position: 'absolute',
        height: 30,
        width: 30,
        backgroundColor: '#C1C1C1',
        zIndex: 10,
        borderRadius: 100,

      }} onPress={toggleModal}>
        {index % 2 == 0 ? (<RightBox title={order.title} status={order.status} />) : (<LeftBox title={order.title} status={order.status} />)}
      </TouchableOpacity>
      <View style={{
        height: 200, width: 80, alignSelf: 'center'
      }}>

      </View>
      <View style={{
        height: 200, width: 80, alignSelf: 'center', borderLeftWidth: 2, borderLeftColor: '#C1C1C1',
        borderStyle: 'dotted', borderRadius: 1,
      }}>
        <Text style={{
          color: '#717A89', fontSize: 12, position: 'absolute', top: 100, left: index % 2 == 0 ? 10 : -45,
          width: 40
        }}>{order.distance}</Text>

      </View>
      <Modal visible={visible}
        animationType="slide"
        onBackdropPress={toggleModalBack}
        backdropStyle={styles.backdrop}
        transparent={false}>
        {renderModalElement()}
      </Modal>

    </View>

  )
};
const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },

})

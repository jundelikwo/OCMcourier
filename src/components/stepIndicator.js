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
  Layout, Modal, Divider
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Entypo'
import IconF from 'react-native-vector-icons/FontAwesome5';
import LeftBox from './leftBox';
import RightBox from './rightBox';
import ModalStatus from './modalStatus';

export default StepIndicator = ({ order, index, navigation, status, modalStatus }) => {
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

  const orderState = order.status ? 'Picked Up' : 'Processed';

  const renderModalElement = () => (
    <View style={{}}>
      <Layout style={{
        flex: 1, flexDirection: 'column', height: 400, width: Dimensions.get('window').width - 50, borderRadius: 16, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 5,
      }}>
        <TouchableOpacity style={{
          backgroundColor: 'transparent', flex: 0.4, borderRadius: 16, alignSelf: 'flex-end',
          flexDirection: 'row',
        }} onPress={toggleModal}>
          <Image style={{
            width: 20,
            height: 20,
            margin: 20
          }} source={require('../assets/x.png')} />
        </TouchableOpacity>
        <View style={{
          backgroundColor: 'transparent', flex: 0.3, alignSelf: 'flex-start', width: Dimensions.get('window').width - 50,
          flexDirection: 'row', justifyContent: 'flex-end',
        }}>
          <ModalStatus modalStatus={order.status} order={order} />
        </View>
        <View style={{
          backgroundColor: 'transparent', flex: 0.5, alignSelf: 'center', width: Dimensions.get('window').width - 90,
          justifyContent: 'center',
        }}>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            color: '#828282',
            fontWeight: 'normal',
            bottom: 12
          }}>
            Stop {order.orderCount}
          </Text>
          <Text style={{
            fontSize: 18,
            fontFamily: 'Muli',
            color: '#515C6F',
            fontWeight: 'bold',
            fontStyle: 'normal'
          }}>
            {order.title}
          </Text>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            color: '#747D8C',
            fontWeight: 'bold',
            marginTop: -5
          }}>
            {order.time}
            <Text style={{
              fontSize: 30,
              color: '#747D8C',
            }}>.</Text>
            {order.distance}
            <Text style={{
              fontSize: 15,
              fontFamily: 'Muli',
              color: '#747D8C',
            }}>
              <Text style={{
                fontSize: 30,
                color: '#747D8C',
              }}>. </Text >
              {orderState} </Text>
          </Text>
          {order.status ? <IconF style={{ bottom: 19, left: 180, }} name='ello' size={10} color={'#5AC966'} /> : <IconF style={{ bottom: 19, left: 199, }} name='ello' size={10} color={'#FD901C'} />}
        </View>
        <Divider style={{
          padding: 0.5,
          backgroundColor: '#b8bcc4',
          width: Dimensions.get('window').width - 90,
          alignSelf: 'center',
          margin: 15
        }} />
        <View style={{
          backgroundColor: 'transparent', flex: 0.6, alignSelf: 'center', width: Dimensions.get('window').width - 90,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            color: '#747D8C',
            fontWeight: 'bold',
            fontStyle: 'normal',
            flex: 1,
          }}>Address:</Text>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            color: '#747D8C',
            fontStyle: 'normal',
            flex: 1.4,
            textAlign: 'left'
          }}>
            {order.address}
          </Text>
        </View>
        <Divider style={{
          padding: 0.5,
          backgroundColor: '#b8bcc4',
          width: Dimensions.get('window').width - 90,
          alignSelf: 'center',
          margin: 15
        }} />
        <View style={{
          backgroundColor: 'transparent', flex: 0.4, alignSelf: 'center', width: Dimensions.get('window').width - 90,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            color: '#747D8C',
            fontWeight: 'bold',
            fontStyle: 'normal',
            flex: 1,
          }}>Phone:</Text>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            color: '#747D8C',
            fontStyle: 'normal',
            flex: 1.4,
            textAlign: 'left'
          }}>
            {order.phone}
          </Text>
        </View>
        <TouchableOpacity style={{
          backgroundColor: '#FD901C', flex: 0.5, alignSelf: 'flex-end', width: Dimensions.get('window').width - 50,
          justifyContent: 'center', borderBottomRightRadius: 16, borderBottomLeftRadius: 16,
          flexDirection: 'row'
        }}
          onPress={navigateDirection} >
          <Icon name='direction' style={{ margin: 10 }} size={35} color={'#fff'} />
          <Text style={{
            fontSize: 18,
            fontFamily: 'Muli',
            alignSelf: 'center',
            color: '#fff',
            fontWeight: 'bold',
            lineHeight: 23,
            textAlign: 'center',
          }}>
            Get Directions
        </Text>
        </TouchableOpacity>
      </Layout >
    </View>

  );
  const nonActiveBall = {
    position: 'absolute',
    height: 30,
    width: 30,
    backgroundColor: '#C1C1C1',
    zIndex: 10,
    borderRadius: 100,
  }
  const activeBall = {
    position: 'absolute',
    height: 40,
    width: 40,
    backgroundColor: '#FD901C',
    zIndex: 10,
    borderRadius: 100,
  }
  const ballStyle = order.status ? activeBall : nonActiveBall
  return (

    <View key={index} style={{ height: 200, width: Dimensions.get('window').width - 40, alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <TouchableOpacity style={ballStyle} onPress={toggleModal}>
        {index % 2 == 0 ? (<RightBox title={order.title} statusText={orderState} status={order.status} />) : (<LeftBox title={order.title} statusText={orderState} status={order.status} />)}
      </TouchableOpacity>
      <View style={{
        height: 200, width: 80, alignSelf: 'center'
      }}>
      </View>
      <View style={{
        height: 200, width: 80, alignSelf: 'center', borderLeftWidth: 2, borderLeftColor: order.status ? '#FD901C' : '#C1C1C1',
        borderStyle: 'dotted', borderRadius: 1,
      }}>
        <Text style={{
          color: '#717A89', fontSize: 12, position: 'absolute', top: 100, left: index % 2 == 0 ? 10 : -50,
          width: 42
        }}>{order.time}{order.distance}</Text>
      </View>
      <Modal visible={visible}
        animationType="slide"
        onBackdropPress={toggleModalBack}
        backdropStyle={styles.backdrop}
        transparent={false}>
        {renderModalElement()}
      </Modal>
    </View >
  )
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }
})

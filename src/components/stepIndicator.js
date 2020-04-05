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


export default StepIndicator = ({ order, index, navigation, isChecked, }) => {
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
    // console.log(order)
  };



  const renderModalElement = () => (
    <View style={{}}>
      <Layout style={{
        flex: 1, flexDirection: 'column', height: 400, width: Dimensions.get('window').width - 60, borderRadius: 16, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 5,

      }}>
        <TouchableOpacity style={{
          backgroundColor: 'transparent', flex: 0.5, borderRadius: 16, alignSelf: 'flex-end',
          flexDirection: 'row',
        }} onPress={toggleModal}>
          <Image style={{
            width: 20,
            height: 20,
            margin: 20
          }} source={require('../assets/x.png')} />
        </TouchableOpacity>
        <View style={{
          backgroundColor: 'transparent', flex: 0.3, alignSelf: 'flex-start', width: Dimensions.get('window').width - 60,
          flexDirection: 'row', justifyContent: 'flex-end',
        }}>
          <ModalStatus isChecked={isChecked} />

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
            // marginBottom: 6
            bottom: 12
          }}>
            Stop 1
          </Text>
          <Text style={{
            fontSize: 18,
            fontFamily: 'Muli',
            color: '#515C6F',
            fontWeight: 'bold',
            fontStyle: 'normal'
          }}>
            Pepper Roni
          </Text>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            color: '#747D8C',
            fontWeight: 'bold',
            marginTop: -5
          }}>10mins<Text style={{
            fontSize: 30,
            color: '#747D8C',
          }}> .</Text> 1.3km <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            color: '#747D8C',
          }}>
              <Text style={{
                fontSize: 30,
                color: '#747D8C',
              }}>. </Text >
              Picked Up </Text>
          </Text>
          <IconF style={{ bottom: 17.5, marginLeft: 210, }} name='ello' size={10} color={'#5AC966'} />


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
            textAlign: 'left',
            lineHeight: 16
          }}>
            6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.
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
          // justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginVertical: 6
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
            textAlign: 'left',
            lineHeight: 16
          }}>
            +234 817 496 9237
            </Text>


        </View>
        <TouchableOpacity style={{
          backgroundColor: '#FD901C', flex: 0.5, alignSelf: 'flex-end', width: Dimensions.get('window').width - 60,
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
  const orderState = order.status ? 'Picked Up' : 'Processed'
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

        {index % 2 == 0 ? (<RightBox title={order.title} statusText={orderState} status={order.status} />) : (<LeftBox title={order.title} statusText={orderState} status={order.status} />)}
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

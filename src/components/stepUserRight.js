import React, { useState } from 'react'
import {
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import UserRightBox from './userRightBox';

export default UserLeft = ({ title, status }) => {
  return (
    <View style={{ height: 200, width: Dimensions.get('window').width - 40, alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <View style={{
        position: 'absolute',
        height: 25,
        width: 25,
        backgroundColor: '#dcd6f7',
        zIndex: 10,
        borderRadius: 100,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <View style={{
          position: 'absolute',
          height: 7,
          width: 7,
          backgroundColor: '#fff',
          zIndex: 10,
          borderRadius: 100,
          top: 4,
          alignSelf: 'flex-start'
        }}>

        </View>
        <View style={{
          position: 'absolute',
          height: 7,
          width: 15,
          backgroundColor: '#fff',
          zIndex: 10,
          borderRadius: 100,
          bottom: 5,
          alignSelf: 'flex-end'
        }}>

        </View>

      </View>
      <UserRightBox title={title} status={status} />

    </View>
  )
};

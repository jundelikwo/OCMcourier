import React, { useState } from 'react'
import {
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default UserLeftBox = ({ title, status }) => {
  return (
    <View style={{ backgroundColor: 'transparent', right: 80, bottom: 20 }}>

      <View style={{
        width: 100,
        height: 60,
        backgroundColor: '#dcd6f7',
        borderRadius: 10,

      }} />
      <Text style={{
        position: 'absolute',
        bottom: 30,
        zIndex: 20,
        fontSize: 12,
        left: 17,
        top: 10,
        color: '#515C6F',
        width: 70,
        fontWeight: 'bold',
        // backgroundColor: 'green',
        // padding: 10

      }}>{title}</Text>
      <Text style={{
        position: 'absolute',

        zIndex: 20,
        fontSize: 11,
        left: 17,
        top: 30,
        color: '#515C6F',
        width: 60,

        // backgroundColor: 'red',


      }}>{status}</Text>
      <Icon name='ello' style={{ alignSelf: 'center', left: 12, bottom: 25 }} size={8} color={'#FD901C'} />
      <View style={{
        position: 'absolute',
        left: 88,
        top: 19.5,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 13,
        borderLeftWidth: 26,
        borderLeftColor: '#dcd6f7',
        borderBottomWidth: 13,
        borderBottomColor: 'transparent'
      }} />

    </View>

  )
};

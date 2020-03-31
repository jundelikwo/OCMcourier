import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default LeftBox = ({ title, status }) => {
  return (
    <View style={{ position: 'absolute', backgroundColor: 'transparent', right: 55, bottom: -10 }}>

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
        top: 5,
        color: '#515C6F',
        width: 70,
        fontWeight: 'bold'
      }}>{title}</Text>
      <Text style={{
        position: 'absolute',
        zIndex: 20,
        fontSize: 11,
        left: 17,
        top: 40,
        color: '#515C6F',
        width: 60,
        height: 34.5,
      }}>{status}</Text>
      <Icon name='ello' style={{ position: 'absolute', left: 72, bottom: 7 }} size={8} color={'#FD901C'} />
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

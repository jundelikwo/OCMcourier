import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default RightBox = ({ title, statusText, status }) => {
  const statusColor = status ? '#5AC966' : '#FD901C'
  return (
    <View style={{ position: 'absolute', backgroundColor: 'transparent', left: 55, bottom: -10 }}>
      <View style={{
        width: 100,
        height: 60,
        backgroundColor: '#dcd6f7',
        borderRadius: 10,
      }} />
      <Text style={{
        position: 'absolute',
        bottom: 30,
        zIndex: 60,
        fontSize: 12,
        left: 17,
        top: 5,
        color: '#515C6F',
        width: 70,
        fontWeight: 'bold',
        height: 34.5
      }}>{title}</Text>
      <Text style={{
        position: 'absolute',
        zIndex: 2,
        fontSize: 11,
        left: 17,
        top: 40,
        color: '#515C6F',
        width: 60,
      }}>{statusText}</Text>
      <Icon name='ello' style={{ position: 'absolute', alignSelf: 'flex-end', left: 72, bottom: 7 }} size={8} color={statusColor} />
      <View style={{
        position: 'absolute',
        left: -15,
        top: 19.5,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 13,
        borderRightWidth: 26,
        borderRightColor: '#dcd6f7',
        borderBottomWidth: 13,
        borderBottomColor: 'transparent',
      }} />
    </View>
  )
};

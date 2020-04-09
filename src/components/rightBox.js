import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default RightBox = ({ title, statusText, status }) => {
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
      {
        status ? <Icon style={{ position: 'absolute', alignSelf: 'flex-end', left: 68, bottom: 7 }} name='ello' size={8} color={'#5AC966'} /> :
          <Icon style={{ position: 'absolute', alignSelf: 'flex-end', left: 72, bottom: 7 }} name='ello' size={8} color={'#FD901C'} />}
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